import Sidebar from '../components/mainPageComponents/Sidebar'
import CategoryDetail from '../components/mainPageComponents/CategoryDetail'
import RecipesList from '../components/mainPageComponents/RecipesList'

import categoryData from '../categoryData'

function MainPage() {
  console.log(categoryData)
  // Task:
  // Convert a super complex array (categoryData)
  // into a much simpler array:
  let categoryNames = categoryData.map(category => {
    return category.categoryName
  })
  // console.log(categoryNames)
  let selectedCategory = categoryData[0]
  console.log(selectedCategory)

  return (
    <div className="main-page">
      <Sidebar categoryNames={categoryNames}/>
      <main className="category-info">
        <section className="category-detail">
          Category Details
        </section>
        <CategoryDetail category={selectedCategory}/>
        <RecipesList recipes={selectedCategory.recipes} />
      </main>
    </div>
  );
}

export default MainPage;
