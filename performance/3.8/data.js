window.BENCHMARK_DATA = {
  "lastUpdate": 1729825890313,
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
        "date": 1729825889542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 18837.759995789253,
            "unit": "iter/sec",
            "range": "stddev: 0.000002394058957904064",
            "extra": "mean: 53.084867851778924 usec\nrounds: 4669"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 519.4201773711744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002765461442068761",
            "extra": "mean: 1.9252236312056206 msec\nrounds: 423"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 521.2682902910967,
            "unit": "iter/sec",
            "range": "stddev: 0.000019107566952219023",
            "extra": "mean: 1.9183979126018977 msec\nrounds: 492"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6640.595712453054,
            "unit": "iter/sec",
            "range": "stddev: 0.000004899567129206606",
            "extra": "mean: 150.58889944537782 usec\nrounds: 4147"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 506.5033339737092,
            "unit": "iter/sec",
            "range": "stddev: 0.00001997397837280213",
            "extra": "mean: 1.9743206666669373 msec\nrounds: 474"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 237070.31515093896,
            "unit": "iter/sec",
            "range": "stddev: 4.0092049788353257e-7",
            "extra": "mean: 4.2181578042080705 usec\nrounds: 16286"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 514.5238062996953,
            "unit": "iter/sec",
            "range": "stddev: 0.000022538643205331868",
            "extra": "mean: 1.943544667430857 msec\nrounds: 436"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 19.797762255369033,
            "unit": "iter/sec",
            "range": "stddev: 0.006397320916480065",
            "extra": "mean: 50.51075909999909 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}