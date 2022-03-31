function getProductSeed() {
  return [
    {
        image: "https://i2.wp.com/www.tshirtcare.com/wp-content/uploads/2018/04/tshirtcare-im-fine-halloween-injury-cool-funny-t-shirt-youth-3.png?resize=1200%2C1500&ssl=1",
        title: "t-shirt all in one shield and max confort",
        description: "it can protect you from all the bad influences and injuries that cant affect you",
        price: 9991,
        unitStock:10,
        quantity:5,
        color: ["red", "blue", "black", "gray","orange","white"],
    },
    {
        image: "https://www.repertoirefashion.co.uk/images/boss-mens-jango-beige-slim-fit-shirt-p37693-189450_image.jpg",
        title: "shirt lskdñad kklkskld work and you know it",
        description: "bla bla bla ok ok buy now",
        price: 1023,
        unitStock:100,
        quantity:10,
        color: ["red", "blue", "black","white"],
    },
    {
        image: "https://mammothworkwear.com/castle-gower-fleece-lined-checked-shirt-w1280h1024q90i13813.jpg",
        title: "shirt ok ok play games",
        description: "no one care about the hidden color that you cannot see",
        price: 1234,
        unitStock:85,
        quantity:3,
        color: ["red", "gray","orange"],
    },
    {
        image: "https://i2.wp.com/www.tshirtcare.com/wp-content/uploads/2018/04/tshirtcare-im-fine-halloween-injury-cool-funny-t-shirt-youth-3.png?resize=1200%2C1500&ssl=1",
        title: "t-shirt all in one shield and max confort",
        description: "it can protect you from all the bad influences and injuries that cant affect you",
        price: 999991,
        unitStock:10,
        quantity:5,
        color: ["red", "blue", "black", "gray","orange","white"],
    },
    ];
  }
  function getSeedUsers() {
    return [
      {
        _id:"100",
        firstName: "Jordan",
        lastName: "Peterson",
        email: "jordan@gmail.com",
      },
      {
        _id:"101",
        firstName: "Margaret",
        lastName: "Watkins",
        email: "marga@gmail.com",
      },
      {
        _id:"102",
        firstName: "Mable",
        lastName: "Schneider",
        email: "mab@gmail.com",
      },
      {
        _id:"103",
        firstName: "Alta",
        lastName: "Harris",
        email: "alta@gmail.com",
      },
      {
        _id:"104",
        firstName: "Darrell",
        lastName: "Wilkerson",
        email: "darrell@gmail.com",
      },
      {
        _id:"105",
        firstName: "Ryan",
        lastName: "McGuire",
        email: "ryan@gmail.com",
      },
    ];
  }

  module.exports = {
    getProductSeed: getProductSeed,
    getSeedUsers: getSeedUsers,
  };