const testMultiPolygons = `MULTIPOLYGON(((26254.667970 4443.613000,26256.851930 4442.787945,26264.149914 4439.917103,
26266.093570 4439.152496,26275.353550 4435.509750,26277.463000 4434.856000,26281.722000 4446.815000,
26286.086000 4459.475000,26287.843827 4464.538325,26288.646240 4466.849630,26288.674853 4466.932050,
26289.056950 4468.171065,26289.065337 4468.194821,26293.705450 4481.338560,26294.409440 4483.302400,
26294.662000 4484.029000,26296.838710 4490.291260,26303.384010 4508.457190,26314.562570 4520.817780,
26315.695831 4521.764489,26320.423980 4525.888390,26312.380250 4532.407560,26307.747110 4533.024390,
26307.409330 4534.043140,26307.139646 4538.188705,26307.091440 4538.929720,26307.091440 4541.861904,
26307.081050 4542.057012,26323.025000 4542.889000,26322.437000 4552.896000,26322.231906 4558.042870,
26322.194007 4558.993960,26322.114063 4561.000176,26321.996000 4563.963000,26323.049200 4564.129337,
26330.733548 4565.342963,26333.811000 4565.829000,26344.792000 4567.407000,26347.462000 4567.421000,
26362.472826 4568.484403,26364.615988 4568.636229,26366.349000 4568.759000,26372.033150 4569.041834,
26379.593000 4569.418000,26379.476740 4570.947189,26379.448701 4571.315977,26379.332572 4572.843449,
26378.522000 4583.505000,26367.742924 4582.772809,26363.746365 4582.501335,26363.447000 4582.481000,
26360.342000 4582.388000,26359.787315 4582.354298,26348.729706 4581.682456,26344.229000 4581.409000,
26342.636598 4581.186573,26332.223000 4579.732000,26319.707000 4577.867486,26319.590043 4577.850062,
26319.444131 4577.828326,26316.099000 4577.330000,26306.122412 4575.994605,26298.520000 4574.977000,
26271.529000 4570.912000,26251.395000 4568.929000,26250.000000 4568.793746,26240.102000 4567.834076,
26236.082020 4567.532731,26235.982939 4567.525304,26233.125138 4567.256156,26232.570538 4567.200073,
26228.937771 4566.832715,26227.045553 4566.641476,26216.085593 4565.550023,26212.380000 4565.181000,
26194.387926 4563.516798,26191.017000 4563.205000,26176.341599 4561.689995,26149.794423 4558.743775,
26143.246271 4557.947045,26142.748587 4556.259247,26140.325083 4553.056759,26140.909321 4549.486417,
26156.532269 4551.001108,26156.856846 4550.892915,26160.188104 4547.178562,26160.299708 4546.981377,
26169.963524 4547.639687,26173.961000 4547.912000,26173.987892 4547.217506,26173.990331 4547.154541,
26174.000215 4546.899273,26174.237439 4540.773000,26174.589000 4531.694000,26174.618616 4531.155903,
26174.928123 4525.532419,26175.118209 4522.078709,26175.146454 4521.401276,26175.898000 4503.376000,
26177.445000 4478.558000,26177.471481 4477.671172,26177.580000 4474.037000,26177.512999 4472.920597,
26189.734952 4474.385884,26191.000755 4473.648135,26203.790130 4462.187320,26215.600869 4456.582821,26221.053934 4454.161383,26220.944970 4453.415280,26221.031894 4448.873000,26221.064090 4447.190540,26236.456610 4447.985364,26242.743057 4448.309977,26250.000000 4445.423344,26253.316870 4444.103975,26254.667970 4443.613000),(26494.966300 4444.895040,26498.043760 4448.302700,26500.000000 4450.494223,26503.584910 4454.510300,26504.926937 4456.013736,26506.834962 4458.151245,26507.330310 4458.706170,26507.842746 4459.272768,26509.936222 4461.587516,26514.564840 4466.705360,26514.868945 4467.020151,26515.126267 4467.413060,26515.245964 4467.713199,26520.461146 4474.475547,26521.050340 4474.771690,26526.278170 4469.057690,26527.349530 4469.143780,26535.544930 4461.644720,26537.860921 4459.563581,26549.830580 4448.807700,26550.441068 4448.248000,26561.689820 4437.935060,26562.851699 4436.883324,26562.783256 4436.796924,26562.511859 4436.454322,26562.041452 4435.860494,26561.890918 4435.670465,26561.269976 4434.886608,26560.649034 4434.102751,26560.028092 4433.318895,26559.407151 4432.535038,26558.786209 4431.751181,26558.541810 4431.442660,26558.960951 4431.004426,26559.652139 4430.281751,26560.343328 4429.559077,26561.034516 4428.836402,26561.725705 4428.113728,26562.344590 4427.466650,26562.422047 4427.396343,26563.162501 4426.724236,26563.902955 4426.052129,26564.643410 4425.380023,26565.383864 4424.707916,26566.124318 4424.035809,26566.864773 4423.363702,26567.605227 4422.691596,26567.916127 4422.409393,26567.959172 4422.309774,26568.021103 4422.166446,26568.046638 4422.023564,26568.076601 4421.855901,26568.252525 4420.871497,26568.428449 4419.887093,26568.478643 4419.606225,26568.604373 4418.902689,26568.701000 4418.362000,26568.989665 4418.015816,26569.630082 4417.247789,26570.270500 4416.479762,26570.910917 4415.711736,26571.551335 4414.943709,26571.755137 4414.699297,26572.191753 4414.175682,26572.310729 4414.032998,26572.832170 4413.407655,26573.472588 4412.639628,26574.113005 4411.871601,26574.437976 4411.481877,26574.614487 4411.270194,26574.687359 4411.065854,26574.768092 4410.839469,26574.797907 4410.755866,26574.908080 4410.094084,26574.920430 4410.019900,26574.957413 4409.095844,26574.997402 4408.096644,26575.037392 4407.097444,26575.077382 4406.098244,26575.117372 4405.099044,26575.157362 4404.099844,26575.197352 4403.100644,26575.237342 4402.101444,26575.277332 4401.102244,26575.317322 4400.103044,26575.335350 4399.652590,26575.366369 4399.104281,26575.422850 4398.105877,26575.479332 4397.107474,26575.535813 4396.109070,26575.575285 4395.411345,26575.592295 4395.110666,26575.648777 4394.112263,26575.705258 4393.113859,26575.761740 4392.115456,26575.818221 4391.117052,26576.067822 4391.131172,26576.515067 4383.225394,26576.839360 4377.258436,26577.291077 4368.946893,26577.419063 4366.171832,26577.136398 4366.147588,26577.222372 4363.625814,26577.286084 4363.628753,26577.332155 4362.629814,26577.378225 4361.630876,26577.424296 4360.631938,26577.470367 4359.633000,26577.516438 4358.634062,26577.562509 4357.635124,26577.585347 4357.139947,26577.608580 4356.636185,26577.654651 4355.637247,26577.700722 4354.638309,26577.746793 4353.639371,26577.792864 4352.640433,26577.803050 4352.419570,26577.821663 4351.640890,26577.832401 4351.370613,26578.027388 4350.668718,26578.155824 4350.216576,26578.459887 4349.782510,26579.033624 4348.963470,26579.607360 4348.144430,26580.181097 4347.325390,26580.754834 4346.506351,26580.675182 4346.406139,26579.530210 4344.965620,26572.238634 4336.724554,26572.164038 4336.640245,26571.172257 4335.474608,26567.834535 4331.699801,26564.116210 4327.494550,26563.879000 4327.711000,26555.803952 4318.606200,26554.566000 4317.422000,26554.301888 4317.121592,26553.521000 4316.359000,26553.391044 4316.206828,26553.618891 4316.011671,26551.095950 4313.153270,26548.741688 4310.593000,26542.067723 4303.335034,26538.632592 4299.599314,26537.484000 4298.280000,26530.134232 4290.259819,26528.560495 4288.688544,26524.395456 4284.423297,26514.788227 4292.983974,26514.515831 4293.346998,26514.200880 4293.665010,26512.437893 4295.325616,26510.468056 4297.181060,26509.314921 4298.295912,26506.136676 4301.157130,26497.517000 4308.917000,26496.941786 4309.272415,26489.336050 4316.740000,26488.871860 4317.672520,26490.274851 4319.288995,26492.409830 4321.748840,26491.269550 4322.627520,26490.233768 4323.425676,26487.467324 4325.714229,26486.815260 4326.276174,26488.576120 4328.242200,26512.973781 4355.457407,26514.034740 4356.640890,26514.023180 4356.884414,26513.176847 4374.713226,26513.075640 4376.845250,26512.900736 4380.974852,26512.891414 4381.266485,26511.947240 4403.487560,26510.796027 4404.460692,26491.103040 4421.107380,26489.257272 4422.677119,26480.889981 4429.793104,26479.811095 4430.710646,26468.241970 4440.549640,26468.949105 4441.355070,26473.193781 4441.607735,26473.661886 4443.425802,26473.745830 4443.751830,26475.926100 4443.832770,26476.408910 4443.817130,26487.615493 4444.468067,26494.966300 4444.895040),(26428.832000 4557.329000,26426.827802 4557.315781,26419.934018 4557.270313,26412.400794 4557.220627,26410.118646 4557.205575,26408.667000 4557.196000,26408.562162 4557.195309,26408.571332 4556.846994,26408.605138 4555.562850,26408.629640 4554.632160,26408.673448 4550.907234,26408.711463 4547.674879,26408.772564 4542.479533,26408.778060 4542.012180,26408.812512 4541.469952,26409.338420 4533.192840,26409.419659 4531.841962,26410.007440 4522.068070,26410.188308 4519.980281,26410.300756 4519.632493,26410.437027 4519.291096,26410.596515 4518.958515,26410.778285 4518.637086,26410.981097 4518.329005,26411.203429 4518.036276,26411.443515 4517.760668,26411.699391 4517.503683,26411.968947 4517.266529,26412.249974 4517.050107,26412.540221 4516.855009,26412.837444 4516.681526,26413.139450 4516.529660,26401.887320 4515.153340,26394.947915 4513.795414,26391.078120 4513.038160,26388.961995 4512.831167,26387.203662 4512.659172,26386.193644 4512.560375,26379.840810 4511.938960,26377.063649 4511.744837,26377.574470 4505.704960,26377.770330 4504.212307,26377.796688 4503.909127,26378.136542 4500.000000,26379.326486 4486.312801,26380.011459 4478.433979,26378.767240 4478.369810,26372.137675 4477.987727,26371.633795 4477.958686,26371.400447 4477.945238,26369.695000 4481.542000,26368.915773 4482.834679,26367.418529 4484.926912,26365.869656 4486.786674,26364.747000 4488.043000,26356.806000 4495.218000,26355.908000 4495.965000,26351.076810 4500.380030,26349.211650 4502.491820,26337.922889 4510.641990,26337.688991 4510.753299,26337.459464 4510.872662,26337.234718 4510.999817,26337.015141 4511.134477,26336.801099 4511.276327,26336.592933 4511.425031,26336.390954 4511.580233,26335.650200 4512.258320,26332.208285 4515.344200,26328.952860 4518.262880,26324.352000 4522.264000,26322.790819 4523.704504,26320.423980 4525.888390,26312.380250 4532.407560,26307.747110 4533.024390,26307.409330 4534.043140,26307.139646 4538.188705,26307.091440 4538.929720,26307.091440 4541.861904,26307.081050 4542.057012,26323.025000 4542.889000,26322.437000 4552.896000,26322.231906 4558.042870,26322.194007 4558.993960,26322.114063 4561.000176,26321.996000 4563.963000,26323.049200 4564.129337,26330.733548 4565.342963,26333.811000 4565.829000,26344.792000 4567.407000,26347.462000 4567.421000,26362.472826 4568.484403,26364.615988 4568.636229,26366.349000 4568.759000,26372.033150 4569.041834,26379.593000 4569.418000,26379.700475 4567.178099,26383.952080 4567.382100,26385.621561 4567.456268,26386.618190 4567.500544,26399.717510 4568.082490,26399.908674 4568.092675,26407.282811 4568.485542,26408.305000 4568.540000,26415.593126 4568.810104,26417.122000 4567.460000,26417.459524 4567.165359,26417.874795 4566.802848,26424.934666 4560.639945,26427.236000 4558.631000,26428.832000 4557.329000),(26292.248110 4200.921175,26290.110130 4200.088272,26287.925373 4199.179260,26286.100300 4198.179360,26285.256260 4197.752100,26276.185140 4187.643900,26275.041920 4188.338050,26273.120960 4192.545550,26250.000000 4213.426988,26243.083000 4219.674000,26233.940492 4227.263431,26224.847524 4234.811738,26224.615875 4235.004035,26222.221714 4234.654074,26222.178504 4234.647758,26221.138345 4235.589499,26205.221872 4250.000000,26202.149690 4252.781500,26191.119399 4282.889216,26189.925360 4293.373939,26186.608367 4322.500104,26186.415888 4324.351702,26186.195874 4326.468174,26184.992611 4338.043227,26184.928495 4338.660004,26185.851000 4338.456000,26191.692016 4343.899737,26194.780815 4346.665990,26205.474880 4336.873800,26215.870180 4327.462840,26215.267669 4326.826442,26213.241030 4324.685820,26213.088481 4324.268218,26212.989303 4323.813368,26212.953881 4323.331429,26212.989915 4322.836010,26213.101076 4322.343203,26213.286125 4321.870028,26213.538779 4321.432557,26213.848400 4321.044133,26214.201374 4320.714088,26214.582811 4320.447198,26214.978095 4320.243940,26215.494361 4319.968600,26216.063781 4319.752470,26216.676077 4319.608530,26217.317195 4319.547255,26217.970012 4319.575296,26218.615718 4319.694451,26219.235548 4319.901256,26219.812570 4320.187317,26220.333164 4320.540314,26220.787941 4320.945442,26221.172000 4321.387000,26221.897231 4322.235804,26226.736199 4318.252208,26228.321085 4320.265950,26233.352021 4326.094024,26236.565000 4322.861000,26235.796000 4322.024000,26237.872000 4320.083000,26238.666000 4320.905000,26241.067000 4318.682000,26241.046000 4318.416000,26240.398000 4317.727000,26242.544000 4315.745000,26243.202000 4316.407000,26243.463000 4316.448000,26247.139000 4313.053000,26247.112000 4312.723000,26246.516000 4312.208000,26248.463000 4309.962000,26249.205000 4310.801000,26249.523000 4310.808000,26254.136000 4306.510000,26254.157000 4306.252000,26253.497000 4305.516000,26255.477000 4303.474000,26256.205000 4304.208000,26256.500000 4304.283000,26260.591490 4300.887045,26261.792000 4299.384000,26263.937000 4297.372000,26263.935000 4297.096000,26263.290000 4296.387000,26265.400000 4294.434000,26266.071000 4295.131000,26266.375000 4295.152000,26271.430000 4290.552000,26271.426000 4290.276000,26270.795000 4289.572000,26272.993000 4287.646000,26273.576000 4288.292000,26273.878000 4288.328000,26278.958000 4283.702000,26278.949000 4283.410000,26278.315000 4282.672000,26280.503000 4280.749000,26281.087000 4281.432000,26281.401000 4281.466000,26283.952176 4279.440927,26285.223000 4277.932000,26287.233000 4276.143000,26287.232000 4275.840000,26286.610000 4275.155000,26288.736000 4273.235000,26289.277000 4273.906000,26289.673000 4273.930000,26294.021000 4269.949000,26294.007000 4269.625000,26293.398000 4268.990000,26295.504000 4267.121000,26295.985000 4267.686000,26296.465000 4267.737000,26300.355000 4264.122000,26300.328000 4263.882000,26299.702000 4263.185000,26301.853000 4261.226000,26302.470000 4261.947000,26302.754000 4261.972000,26306.694000 4258.383000,26306.669000 4258.075000,26306.048000 4257.410000,26308.156000 4255.461000,26308.837000 4256.129000,26309.121000 4256.158000,26313.043000 4252.548000,26313.047000 4252.259000,26312.389000 4251.590000,26314.557000 4249.657000,26315.214000 4250.331000,26315.497000 4250.357000,26321.886100 4244.747930,26323.286064 4246.306942,26328.136730 4242.589630,26322.970000 4236.734000,26322.923471 4236.603502,26322.882962 4236.471012,26322.848558 4236.336807,26322.820330 4236.201169,26322.798339 4236.064381,26322.782630 4235.926730,26322.773235 4235.788504,26322.770176 4235.649993,26322.773457 4235.511488,26322.783072 4235.373277,26322.799002 4235.235652,26322.821212 4235.098899,26322.849656 4234.963306,26322.884275 4234.829156,26322.924996 4234.696731,26322.971734 4234.566308,26323.258387 4234.154235,26325.281589 4232.398629,26325.438515 4232.319559,26325.598519 4232.246920,26325.761339 4232.180833,26325.926706 4232.121405,26326.094347 4232.068736,26326.263987 4232.022911,26326.435347 4231.984005,26326.608144 4231.952084,26326.782094 4231.927200,26326.956910 4231.909393,26327.132305 4231.898693,26327.307989 4231.895117,26327.483674 4231.898672,26327.659070 4231.909351,26327.833888 4231.927138,26328.007841 4231.952002,26327.010790 4221.356820,26325.677358 4221.015614,26324.970036 4220.629565,26324.059200 4220.182950,26321.797050 4218.297720,26318.437463 4214.764549,26314.585351 4210.713405,26313.634105 4209.713010,26312.895560 4204.630590,26312.443350 4203.575320,26311.099160 4200.484340,26310.746287 4200.028642,26310.030870 4199.525360,26309.324644 4199.417837,26308.704140 4199.460170,26303.703990 4201.173560,26302.233960 4201.579218,26300.277779 4201.996373,26298.246720 4202.028150,26296.525759 4201.996373,26293.832002 4201.482952,26292.248110 4200.921175),(26394.196770 4182.217780,26394.413861 4182.009819,26394.957677 4181.488872,26403.421641 4173.380850,26404.197750 4172.637380,26404.548398 4172.302248,26409.285408 4167.774850,26411.864440 4165.309940,26415.666773 4169.101591,26420.617000 4174.108000,26420.736340 4175.499409,26422.919970 4178.021690,26434.587139 4188.551383,26435.388578 4187.770406,26441.000650 4193.013127,26447.281293 4199.450436,26455.975000 4208.361000,26458.791164 4211.164736,26476.816000 4231.391000,26487.363493 4242.266104,26496.389145 4252.099726,26504.565588 4261.008117,26510.921579 4268.137905,26516.854482 4275.296948,26523.578000 4283.410000,26524.395456 4284.423297,26514.788227 4292.983974,26514.515831 4293.346998,26514.200880 4293.665010,26512.437893 4295.325616,26510.468056 4297.181060,26509.314921 4298.295912,26506.136676 4301.157130,26497.517000 4308.917000,26496.941786 4309.272415,26489.336050 4316.740000,26488.871860 4317.672520,26490.274851 4319.288995,26492.409830 4321.748840,26491.269550 4322.627520,26490.233768 4323.425676,26487.467324 4325.714229,26486.815260 4326.276174,26475.735552 4313.989082,26451.596680 4287.194770,26409.265650 4326.279550,26407.915300 4349.207630,26407.865620 4350.562130,26406.887960 4369.402570,26406.249511 4381.949628,26405.279640 4401.009941,26405.180616 4403.835766,26405.055297 4406.419865,26400.613800 4406.271460,26398.818790 4406.338470,26397.673584 4406.318533,26397.287246 4406.352825,26396.901346 4406.408082,26396.517588 4406.484339,26396.137679 4406.581444,26395.763310 4406.699062,26395.396128 4406.836675,26395.037711 4406.993593,26394.689548 4407.168961,26394.353015 4407.361779,26394.029363 4407.570914,26393.719700 4407.795125,26393.424980 4408.033080,26388.054430 4412.639328,26383.182414 4407.362642,26381.998379 4403.952641,26392.317821 4394.306207,26393.769491 4368.972007,26394.223930 4359.273220,26394.339222 4357.225253,26395.414200 4338.130080,26396.660000 4338.130080,26397.168530 4328.883310,26397.192607 4327.706224,26397.262609 4326.528090,26397.379167 4325.351342,26397.542226 4324.178736,26397.751515 4323.013025,26398.006543 4321.856931,26398.306610 4320.713129,26394.146580 4316.014200,26392.715819 4314.424973,26393.069499 4314.104838,26384.633062 4304.790416,26383.416433 4303.417923,26382.389973 4302.272769,26376.748466 4296.073698,26376.227915 4294.268388,26375.365208 4293.327150,26370.712031 4288.281746,26365.285728 4282.397593,26366.746539 4281.098564,26368.700460 4279.368500,26380.978870 4268.476750,26382.426650 4267.533100,26387.216769 4263.011343,26379.250910 4254.756520,26371.694780 4246.115520,26368.924899 4242.995429,26368.056069 4242.016748,26367.015975 4240.845150,26366.567235 4240.331259,26366.122797 4239.822295,26365.585893 4239.361803,26364.993763 4238.948510,26356.926827 4231.176739,26362.665310 4225.854340,26356.582757 4219.443367,26355.116804 4217.818374,26352.996920 4215.408270,26354.562730 4213.999920,26356.011507 4212.705969,26372.374040 4198.092040,26386.252770 4185.720180,26386.984318 4185.399445,26388.034710 4185.325370,26389.041981 4185.624640,26389.725450 4186.104370,26394.196770 4182.217780)))
`