import DocumentModel from '../models/document.js'

export const create = async (req, res) => {
  try {
    const doc = new DocumentModel({
      corespodent: req.body.corespodent,
      dateOut: req.body.dateOut,
      deliveryType: req.body.deliveryType,
      division: req.body.deliveryType,
      outNumber: req.body.outNumber,
      performer: req.body.performer,
      registerDate: req.body.registerDate,
      registerNumber: req.body.registerNumber,
      registrator: req.body.registrator,
      theme: req.body.theme,
      inNumber: req.body.inNumber,
      inDate: req.body.inDate,
    });

    const document = await doc.save();

    res.json(document);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать документ",
    });
  }
}

export const update = async (req, res) => {
  try {
    const documentId = req.params.id;

    await DocumentModel.updateOne(
      {
        _id: documentId
      },
      {
        corespodent: req.body.corespodent,
        dateOut: req.body.dateOut,
        deliveryType: req.body.deliveryType,
        division: req.body.deliveryType,
        outNumber: req.body.outNumber,
        performer: req.body.performer,
        registerDate: req.body.registerDate,
        registerNumber: req.body.registerNumber,
        registrator: req.body.registrator,
        theme: req.body.theme,
        inNumber: req.body.inNumber,
        inDate: req.body.inDate,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить документ",
    });
  }
}

export const remove = async (req, res) => {
  try {
    const documentId = req.params.id;
    console.log(documentId);

    let document = await DocumentModel.findById(documentId);
    if (!document) {
      return res.status(404).json({
        message: 'Документ не найден'
      });
    }

    await DocumentModel.findOneAndDelete({ _id: documentId }).exec();

    res.json({
      success: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить документ",
    });
  }
}

export const getOne = async (req, res) => {
  try {
    const documentId = req.params.id;

    let document = await DocumentModel.findById(documentId);
    if (!document) {
      return res.status(404).json({
        message: 'Документ не найден'
      });
    }

    res.json(document._doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить документ",
    });
  }
}

export const getAll = async (req, res) => {
  try {
    let documents = await DocumentModel
      .find()
      .exec();

    res.json(documents);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить документы",
    });
  }
}