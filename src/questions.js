
const s3Prefix = "https://peak-green-survey-bucket.s3.us-east-2.amazonaws.com/";

const questions = {
  sortingTask: {
    questions: [{
      images: [
        s3Prefix + "Field1_2017-07-03_FALSE.jpg",
        s3Prefix + "Field1_2017-07-16_FALSE.jpg",
        s3Prefix + "Field1_2017-07-18_FALSE.jpg",
        s3Prefix + "Field1_2017-07-23_FALSE.jpg",
        s3Prefix + "Field1_2017-07-31_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2018-06-26_FALSE.jpg",
        s3Prefix + "Field1_2018-07-06_FALSE.jpg",
        s3Prefix + "Field1_2018-07-11_FALSE.jpg",
        s3Prefix + "Field1_2018-07-16_FALSE.jpg",
        s3Prefix + "Field1_2018-07-21_FALSE.jpg",
        s3Prefix + "Field1_2018-07-26_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-06-28_FALSE.jpg",
        s3Prefix + "Field1_2019-07-01_FALSE.jpg",
        s3Prefix + "Field1_2019-07-13_FALSE.jpg",
        s3Prefix + "Field1_2019-07-28_FALSE.jpg",
        s3Prefix + "Field1_2019-07-31_FALSE.jpg",
      ],
    },
    // {
    //   images: [
    //     s3Prefix + "Field1_2019-08-05_FALSE.jpg",
    //     s3Prefix + "Field1_2019-08-20_FALSE.jpg",
    //     s3Prefix + "Field1_2019-08-27_FALSE.jpg",
    //     s3Prefix + "Field1_2019-08-30_FALSE.jpg",
    //   ],
    // },
    {
      images: [
        s3Prefix + "Field1_2020-07-05_FALSE.jpg",
        s3Prefix + "Field1_2020-07-15_FALSE.jpg",
        s3Prefix + "Field1_2020-07-20_FALSE.jpg",
        s3Prefix + "Field1_2020-07-27_FALSE.jpg",
        s3Prefix + "Field1_2020-08-04_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2017-06-28_FALSE.jpg",
        s3Prefix + "Field2_2017-07-13_FALSE.jpg",
        s3Prefix + "Field2_2017-07-18_FALSE.jpg",
        s3Prefix + "Field2_2017-08-07_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2018-07-13_FALSE.jpg",
        s3Prefix + "Field2_2018-07-18_FALSE.jpg",
        s3Prefix + "Field2_2018-07-28_FALSE.jpg",
        s3Prefix + "Field2_2018-08-07_FALSE.jpg",
        s3Prefix + "Field2_2018-08-12_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2019-06-23_FALSE.jpg",
        s3Prefix + "Field2_2019-06-28_FALSE.jpg",
        s3Prefix + "Field2_2019-07-13_FALSE.jpg",
        s3Prefix + "Field2_2019-07-18_FALSE.jpg",
        s3Prefix + "Field2_2019-07-28_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2020-07-02_FALSE.jpg",
        s3Prefix + "Field2_2020-07-12_FALSE.jpg",
        s3Prefix + "Field2_2020-07-22_FALSE.jpg",
        s3Prefix + "Field2_2020-07-27_FALSE.jpg",
        s3Prefix + "Field2_2020-08-11_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2018-07-06_FALSE.jpg",
        s3Prefix + "Field3_2018-07-11_FALSE.jpg",
        s3Prefix + "Field3_2018-07-16_FALSE.jpg",
        s3Prefix + "Field3_2018-07-21_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2020-07-10_FALSE.jpg",
        s3Prefix + "Field3_2020-07-15_FALSE.jpg",
        s3Prefix + "Field3_2020-07-30_FALSE.jpg",
        s3Prefix + "Field3_2020-08-09_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-07-10_FALSE.jpg",
        s3Prefix + "Field3_2021-07-15_FALSE.jpg",
        s3Prefix + "Field3_2021-07-25_FALSE.jpg",
        s3Prefix + "Field3_2021-07-30_FALSE.jpg",
        s3Prefix + "Field3_2021-08-14_FALSE.jpg",
      ],
    }],
  },
  comparisonTask: {
    questions: [{
        images: [
            s3Prefix + "Field1_2017-07-16_FALSE.jpg",
            s3Prefix + "Field1_2017-08-07_FALSE.jpg",
        ],
    }, {
      images: [
        s3Prefix + "Field1_2018-07-01_FALSE.jpg",
        s3Prefix + "Field1_2018-08-07_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-09-21_FALSE.jpg",
        s3Prefix + "Field1_2019-08-30_FALSE.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-06-30_FALSE.jpg",
        s3Prefix + "Field3_2021-07-05_FALSE.jpg",
      ],
    }],
  }
};

export default questions;
