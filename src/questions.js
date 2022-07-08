
const s3Prefix = "https://peak-green-survey-bucket.s3.us-east-2.amazonaws.com/";

const questions = {
  sortingTask: {
    questions: [{
      images: [
        s3Prefix + "Field1_2017-07-03.png",
        s3Prefix + "Field1_2017-07-16.png",
        s3Prefix + "Field1_2017-07-18.png",
        s3Prefix + "Field1_2017-07-23.png",
        s3Prefix + "Field1_2017-07-31.png",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2018-06-26.png",
        s3Prefix + "Field1_2018-07-06.png",
        s3Prefix + "Field1_2018-07-11.png",
        s3Prefix + "Field1_2018-07-16.png",
        s3Prefix + "Field1_2018-07-21.png",
        s3Prefix + "Field1_2018-07-26.png",
      ],
    }, {
      images: [
        s3Prefix + "Field1_2019-06-28.png",
        s3Prefix + "Field1_2019-07-01.png",
        s3Prefix + "Field1_2019-07-13.png",
        s3Prefix + "Field1_2019-07-28.png",
        s3Prefix + "Field1_2019-07-31.png",
      ],
    },
    // {
    //   images: [
    //     s3Prefix + "Field1_2019-08-05.png",
    //     s3Prefix + "Field1_2019-08-20.png",
    //     s3Prefix + "Field1_2019-08-27.png",
    //     s3Prefix + "Field1_2019-08-30.png",
    //   ],
    // },
    {
      images: [
        s3Prefix + "Field1_2020-07-05.png",
        s3Prefix + "Field1_2020-07-15.png",
        s3Prefix + "Field1_2020-07-20.png",
        s3Prefix + "Field1_2020-07-27.png",
        s3Prefix + "Field1_2020-08-04.png",
      ],
    }, {
      images: [
        "/images/field1_ndvi_medium.jpg",
        "/images/field1_ndvi.jpg",
        "/images/field1_ndvi_light.jpg",
        "/images/field1_ndvi_dark.jpg",
        "/images/field1_ndvi_brightest.jpg",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2017-06-28.png",
        s3Prefix + "Field2_2017-07-13.png",
        s3Prefix + "Field2_2017-07-18.png",
        s3Prefix + "Field2_2017-08-07.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2018-07-13.png",
        s3Prefix + "Field2_2018-07-18.png",
        s3Prefix + "Field2_2018-07-28.png",
        s3Prefix + "Field2_2018-08-07.png",
        s3Prefix + "Field2_2018-08-12.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2019-06-23.png",
        s3Prefix + "Field2_2019-06-28.png",
        s3Prefix + "Field2_2019-07-13.png",
        s3Prefix + "Field2_2019-07-18.png",
        s3Prefix + "Field2_2019-07-28.png",
      ],
    }, {
      images: [
        s3Prefix + "Field2_2020-07-02.png",
        s3Prefix + "Field2_2020-07-12.png",
        s3Prefix + "Field2_2020-07-22.png",
        s3Prefix + "Field2_2020-07-27.png",
        s3Prefix + "Field2_2020-08-11.png",
      ],
    }, {
      images: [
        "/images/Field3_dark.png",
        "/images/Field3_light.png",
        "/images/Field3_brightest.png",
        "/images/Field3.png",
      ],
    },{
      images: [
        s3Prefix + "Field3_2018-07-06.png",
        s3Prefix + "Field3_2018-07-11.png",
        s3Prefix + "Field3_2018-07-16.png",
        s3Prefix + "Field3_2018-07-21.png",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2020-07-10.png",
        s3Prefix + "Field3_2020-07-15.png",
        s3Prefix + "Field3_2020-07-30.png",
        s3Prefix + "Field3_2020-08-09.png",
      ],
    }, {
      images: [
        s3Prefix + "Field3_2021-07-10.png",
        s3Prefix + "Field3_2021-07-15.png",
        s3Prefix + "Field3_2021-07-25.png",
        s3Prefix + "Field3_2021-07-30.png",
        s3Prefix + "Field3_2021-08-14.png",
      ],
    }],
  },
  comparisonTask: {
    questions: [],
  }
};

export default questions;
