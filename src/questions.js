
const s3Prefix = "https://peak-green-survey-bucket.s3.us-east-2.amazonaws.com/";

const questions = {
  sortingTask: {
    questions: [{
      images: [
        s3Prefix + "Field1_2017-07-03_FALSE.png",
        s3Prefix + "Field1_2017-07-16_FALSE.png",
        s3Prefix + "Field1_2017-07-18_FALSE.png",
        s3Prefix + "Field1_2017-07-23_FALSE.png",
        s3Prefix + "Field1_2017-07-31_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2018-06-26_FALSE.png",
        s3Prefix + "Field1_2018-07-06_FALSE.png",
        s3Prefix + "Field1_2018-07-11_FALSE.png",
        s3Prefix + "Field1_2018-07-16_FALSE.png",
        s3Prefix + "Field1_2018-07-21_FALSE.png",
        s3Prefix + "Field1_2018-07-26_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-06-28_FALSE.png",
        s3Prefix + "Field1_2019-07-01_FALSE.png",
        s3Prefix + "Field1_2019-07-13_FALSE.png",
        s3Prefix + "Field1_2019-07-28_FALSE.png",
        s3Prefix + "Field1_2019-07-31_FALSE.png",
      ],
    },
    // {
    //   images: [
    //     s3Prefix + "Field1_2019-08-05_FALSE.png",
    //     s3Prefix + "Field1_2019-08-20_FALSE.png",
    //     s3Prefix + "Field1_2019-08-27_FALSE.png",
    //     s3Prefix + "Field1_2019-08-30_FALSE.png",
    //   ],
    // },
    {
      images: [
        s3Prefix + "Field1_2020-07-05_FALSE.png",
        s3Prefix + "Field1_2020-07-15_FALSE.png",
        s3Prefix + "Field1_2020-07-20_FALSE.png",
        s3Prefix + "Field1_2020-07-27_FALSE.png",
        s3Prefix + "Field1_2020-08-04_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2017-06-28_FALSE.png",
        s3Prefix + "Field2_2017-07-13_FALSE.png",
        s3Prefix + "Field2_2017-07-18_FALSE.png",
        s3Prefix + "Field2_2017-08-07_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2018-07-13_FALSE.png",
        s3Prefix + "Field2_2018-07-18_FALSE.png",
        s3Prefix + "Field2_2018-07-28_FALSE.png",
        s3Prefix + "Field2_2018-08-07_FALSE.png",
        s3Prefix + "Field2_2018-08-12_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2019-06-23_FALSE.png",
        s3Prefix + "Field2_2019-06-28_FALSE.png",
        s3Prefix + "Field2_2019-07-13_FALSE.png",
        s3Prefix + "Field2_2019-07-18_FALSE.png",
        s3Prefix + "Field2_2019-07-28_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2020-07-02_FALSE.png",
        s3Prefix + "Field2_2020-07-12_FALSE.png",
        s3Prefix + "Field2_2020-07-22_FALSE.png",
        s3Prefix + "Field2_2020-07-27_FALSE.png",
        s3Prefix + "Field2_2020-08-11_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2018-07-06_FALSE.png",
        s3Prefix + "Field3_2018-07-11_FALSE.png",
        s3Prefix + "Field3_2018-07-16_FALSE.png",
        s3Prefix + "Field3_2018-07-21_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2020-07-10_FALSE.png",
        s3Prefix + "Field3_2020-07-15_FALSE.png",
        s3Prefix + "Field3_2020-07-30_FALSE.png",
        s3Prefix + "Field3_2020-08-09_FALSE.png",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-07-10_FALSE.png",
        s3Prefix + "Field3_2021-07-15_FALSE.png",
        s3Prefix + "Field3_2021-07-25_FALSE.png",
        s3Prefix + "Field3_2021-07-30_FALSE.png",
        s3Prefix + "Field3_2021-08-14_FALSE.png",
      ],
    }],
  },
  comparisonTask: {
    questions: [],
  }
};

export default questions;
