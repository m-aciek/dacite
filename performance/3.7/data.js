window.BENCHMARK_DATA = {
  "lastUpdate": 1729825885115,
  "repoUrl": "https://github.com/m-aciek/dacite",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Maciej Olko",
            "username": "m-aciek",
            "email": "maciej.olko@gmail.com"
          },
          "committer": {
            "name": "Maciej Olko",
            "username": "m-aciek",
            "email": "maciej.olko@gmail.com"
          },
          "id": "53270e31c86bbb2217d2aff2c63b18d54de510bf",
          "message": "use native github token",
          "timestamp": "2024-10-25T03:06:17Z",
          "url": "https://github.com/m-aciek/dacite/commit/53270e31c86bbb2217d2aff2c63b18d54de510bf"
        },
        "date": 1729825884663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 18669.222939656138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027671911852284038",
            "extra": "mean: 53.564093333303916 usec\nrounds: 4575"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 490.65286422210585,
            "unit": "iter/sec",
            "range": "stddev: 0.000060000980563483514",
            "extra": "mean: 2.0381008100002163 msec\nrounds: 400"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 494.2690269908854,
            "unit": "iter/sec",
            "range": "stddev: 0.000022731328679880265",
            "extra": "mean: 2.0231896910231453 msec\nrounds: 479"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6112.116019817954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054752323808717145",
            "extra": "mean: 163.60945976116867 usec\nrounds: 3852"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 479.54481875016353,
            "unit": "iter/sec",
            "range": "stddev: 0.00010782459427907895",
            "extra": "mean: 2.0853108216376888 msec\nrounds: 342"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 237434.73898101167,
            "unit": "iter/sec",
            "range": "stddev: 4.926716322753702e-7",
            "extra": "mean: 4.211683615850218 usec\nrounds: 16815"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 431.86809604285946,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171055431812417",
            "extra": "mean: 2.3155218205809716 msec\nrounds: 379"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 19.147059198793514,
            "unit": "iter/sec",
            "range": "stddev: 0.0031619173857348622",
            "extra": "mean: 52.22734152631708 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}