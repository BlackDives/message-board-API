const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const data = await Message.find();
    res
      .status(200)
      .send({
        success: true,
        message: 'data successfully retrieved',
        messageList: data,
      });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.postMessages = async (req, res) => {
  try {
    const { message, name } = req.body;
    const newMessage = await Message.create({
      message,
      name,
    });
    console.log(newMessage);
    res
      .status(201)
      .send({ success: true, message: 'message successfully created' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};
