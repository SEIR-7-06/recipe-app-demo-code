import Sidebar from '../components/mainPageComponents/Sidebar'
import CategoryDetail from '../components/mainPageComponents/CategoryDetail'
import RecipesList from '../components/mainPageComponents/RecipesList'

function MainPage() {
    return (
      <div className="main-page">
        <Sidebar />
        <main className="category-info">         
          <section className="category-detail">
            Category Details
          </section>
          <CategoryDetail />
          <RecipesList />
        </main>
      </div>
    );
  }
  
  export default MainPage;
  