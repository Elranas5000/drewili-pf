const createNewCategory = require('../../controllers/Category/postCategoryController')


const postCategoryHandler = async (req, res) => {
  const { category } = req.body;
  try {
    await createNewCategory(category);
    return res.status(200).json({ message: 'Categoría creada exitosamente' })
  } catch (error) {
    return res.status(400).send("error");
  }
}

module.exports =  postCategoryHandler;