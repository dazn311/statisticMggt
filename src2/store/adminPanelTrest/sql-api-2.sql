CREATE OR REPLACE FUNCTION public.get_message(
	_rec_id integer)
    RETURNS SETOF mggt_message 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
AS $BODY$
  BEGIN
  RETURN QUERY select * from mggt_message where msg_rec_id =_rec_id order by msg_id;
  END; 
$BODY$;