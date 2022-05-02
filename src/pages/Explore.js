import { Link } from 'react-router-dom'

import rentCategoryImage from '../assets/jpg/pol.jpeg'
import sellCategoryImage from '../assets/jpg/pol.jpeg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore Latest Publications</p>
      </header>

      <main>
        
        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/publications/politics'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Politics</p>
          </Link>
          <Link to='/publications/entertainment'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Entertainment</p>
          </Link>
          
        </div>
        <div className='exploreCategories'>
          <Link to='/publications/science'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Science</p>
          </Link>
          <Link to='/publications/education'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Education</p>
          </Link>
          
        </div>
        <div className='exploreCategories'>
          <Link to='/publications/relationship'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Relationship and Love</p>
          </Link>
          <Link to='/publications/jobs'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Jobs</p>
          </Link>
          
        </div>
      </main>
    </div>
  )
}

export default Explore