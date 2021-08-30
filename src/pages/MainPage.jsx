import React from 'react'
import Sidebar from '../components/mainPageComponents/Sidebar'
import CategoryDetail from '../components/mainPageComponents/CategoryDetail'
import RecipesList from '../components/mainPageComponents/RecipesList'

import categoryData from '../categoryData'

class MainPage extends React.Component {

  state = {
    categoryIdx: 0
  }

  updateCategoryIdx = (idx) => {
    // Anytime we update state we must call this.setState()
    // this.setState() will tell the component to rerender.
    this.setState({ categoryIdx: idx });
  }

  render() {
    console.log(categoryData)
    // Task:
    // Convert a super complex array (categoryData)
    // into a much simpler array:
    let categoryNames = categoryData.map(category => {
      return category.categoryName
    })
    // console.log(categoryNames)
    let selectedCategory = categoryData[this.state.categoryIdx]
    console.log(selectedCategory)
  
    return (
      <div className="main-page">
        <Sidebar 
          categoryNames={categoryNames}
          updateCategoryIdx={this.updateCategoryIdx}
        />
        <main className="category-info">
          <CategoryDetail category={selectedCategory}/>
          <RecipesList recipes={selectedCategory.recipes} />
        </main>
      </div>
    );
  }
}

export default MainPage;
