-- FUNCTION: public.get_last_logs(integer, text, text, text[])

-- DROP FUNCTION public.get_last_logs(integer, text, text, text[]);

CREATE OR REPLACE FUNCTION public.get_last_logs(
	_limit integer DEFAULT 10,
	_start_date text DEFAULT (
	(
	date_trunc(
	'days'::text,
	(
	CURRENT_TIMESTAMP - '180 days'::interval)))::timestamp without time zone)::text,
	_end_date text DEFAULT (
	CURRENT_TIMESTAMP)::text,
	_log_types text[] DEFAULT NULL::text[])
    RETURNS TABLE(datatime text, starttime text, endtime text, amount integer, data json)
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE
    ROWS 1000
AS $BODY$
	BEGIN
		RETURN QUERY
			SELECT
				to_char(current_timestamp, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"'),
				to_char(_start_date::timestamp without time zone , 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS starttime,
				to_char(_end_date::timestamp without time zone, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS endtime,
				COUNT(temp_table.amount)::integer AS amount,
				json_build_object(
					'nodes',json_agg(
						temp_table.log_node
					)
				) AS data
			FROM
				generate_series(1, 1, 1) t(temp_id)
			FULL JOIN (
				SELECT
					1 AS amount,
					json_build_object(
						'type', mggt_users_log.user_log_type::text,
						'text', mggt_users_log.user_log_text::text,
						'date', mggt_users_log.user_log_date::timestamp without time zone,
						'user', json_build_object(
									'userID', mggt_users_log.user_log_user_id,
									'username', mggt_users.user_fio_lit
								)
					) AS log_node
				FROM
					mggt_users_log
				RIGHT JOIN
					mggt_users
				ON
					mggt_users.user_id = mggt_users_log.user_log_user_id
				WHERE
					mggt_users_log.user_log_type = ANY(
						ARRAY['new_msg','new_rec']
					)
					AND
					mggt_users_log.user_log_date >= _start_date::timestamp without time zone
					AND
					mggt_users_log.user_log_date <= _end_date::timestamp without time zone
				ORDER BY mggt_users_log.user_log_date DESC
				LIMIT _limit
			) temp_table
			ON
				temp_table.amount = temp_id;

	END;
$BODY$;

ALTER FUNCTION public.get_last_logs(integer, text, text, text[])
    OWNER TO ismggt;

GRANT EXECUTE ON FUNCTION public.get_last_logs(integer, text, text, text[]) TO ismggt;

GRANT EXECUTE ON FUNCTION public.get_last_logs(integer, text, text, text[]) TO mggt_alex;

GRANT EXECUTE ON FUNCTION public.get_last_logs(integer, text, text, text[]) TO PUBLIC;

