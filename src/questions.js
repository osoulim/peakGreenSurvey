
const s3Prefix = "https://peak-green-survey-bucket.s3.us-east-2.amazonaws.com/";

const questions = {
  sortingTask: {
    questions: [{
      images: [
        s3Prefix + "Field1_2017-07-03.jpg",
        s3Prefix + "Field1_2017-07-16.jpg",
        s3Prefix + "Field1_2017-07-18.jpg",
        s3Prefix + "Field1_2017-07-23.jpg",
        s3Prefix + "Field1_2017-07-31.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2018-06-26.jpg",
        s3Prefix + "Field1_2018-07-06.jpg",
        s3Prefix + "Field1_2018-07-11.jpg",
        s3Prefix + "Field1_2018-07-16.jpg",
        s3Prefix + "Field1_2018-07-21.jpg",
        s3Prefix + "Field1_2018-07-26.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-06-28.jpg",
        s3Prefix + "Field1_2019-07-01.jpg",
        s3Prefix + "Field1_2019-07-13.jpg",
        s3Prefix + "Field1_2019-07-28.jpg",
        s3Prefix + "Field1_2019-07-31.jpg",
      ],
    },
    // {
    //   images: [
    //     s3Prefix + "Field1_2019-08-05.jpg",
    //     s3Prefix + "Field1_2019-08-20.jpg",
    //     s3Prefix + "Field1_2019-08-27.jpg",
    //     s3Prefix + "Field1_2019-08-30.jpg",
    //   ],
    // },
    {
      images: [
        s3Prefix + "Field1_2020-07-05.jpg",
        s3Prefix + "Field1_2020-07-15.jpg",
        s3Prefix + "Field1_2020-07-20.jpg",
        s3Prefix + "Field1_2020-07-27.jpg",
        s3Prefix + "Field1_2020-08-04.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2017-06-28.jpg",
        s3Prefix + "Field2_2017-07-13.jpg",
        s3Prefix + "Field2_2017-07-18.jpg",
        s3Prefix + "Field2_2017-08-07.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2018-07-13.jpg",
        s3Prefix + "Field2_2018-07-18.jpg",
        s3Prefix + "Field2_2018-07-28.jpg",
        s3Prefix + "Field2_2018-08-07.jpg",
        s3Prefix + "Field2_2018-08-12.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2019-06-23.jpg",
        s3Prefix + "Field2_2019-06-28.jpg",
        s3Prefix + "Field2_2019-07-13.jpg",
        s3Prefix + "Field2_2019-07-18.jpg",
        s3Prefix + "Field2_2019-07-28.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2020-07-02.jpg",
        s3Prefix + "Field2_2020-07-12.jpg",
        s3Prefix + "Field2_2020-07-22.jpg",
        s3Prefix + "Field2_2020-07-27.jpg",
        s3Prefix + "Field2_2020-08-11.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2018-07-06.jpg",
        s3Prefix + "Field3_2018-07-11.jpg",
        s3Prefix + "Field3_2018-07-16.jpg",
        s3Prefix + "Field3_2018-07-21.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2020-07-10.jpg",
        s3Prefix + "Field3_2020-07-15.jpg",
        s3Prefix + "Field3_2020-07-30.jpg",
        s3Prefix + "Field3_2020-08-09.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-07-10.jpg",
        s3Prefix + "Field3_2021-07-15.jpg",
        s3Prefix + "Field3_2021-07-25.jpg",
        s3Prefix + "Field3_2021-07-30.jpg",
        s3Prefix + "Field3_2021-08-14.jpg",
      ],
    }],
  },
  comparisonTask: {
    questions: [{
        images: [
            s3Prefix + "Field1_2017-07-16.jpg",
            s3Prefix + "Field1_2017-08-07.jpg",
        ],
    }, {
      images: [
        s3Prefix + "Field1_2018-07-01.jpg",
        s3Prefix + "Field1_2018-08-07.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-09-21.jpg",
        s3Prefix + "Field1_2019-08-30.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-06-30.jpg",
        s3Prefix + "Field3_2021-07-05.jpg",
      ],
    }],
  }
};

export default questions;
