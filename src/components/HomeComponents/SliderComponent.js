import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const SliderComponent = () => {
  const refSliderContainer = useRef(null)
  const refChevronLeft = useRef(null)
  const refChevronRight = useRef(null)
  const refSliderPagination = useRef(null)

  const sliderHandleLeft = () => {
    if (refSliderContainer.current.classList.contains('page-1')) {
      refSliderContainer.current.classList.remove('page-1')
      refSliderPagination.current.classList.remove('page-1')
      refSliderContainer.current.classList.add('page-5')
      refSliderPagination.current.classList.add('page-5')
    } else if (refSliderContainer.current.classList.contains('page-2')) {
      refSliderContainer.current.classList.remove('page-2')
      refSliderPagination.current.classList.remove('page-2')
      refSliderContainer.current.classList.add('page-1')
      refSliderPagination.current.classList.add('page-1')
    } else if (refSliderContainer.current.classList.contains('page-3')) {
      refSliderContainer.current.classList.remove('page-3')
      refSliderPagination.current.classList.remove('page-3')
      refSliderContainer.current.classList.add('page-2')
      refSliderPagination.current.classList.add('page-2')
    } else if (refSliderContainer.current.classList.contains('page-4')) {
      refSliderContainer.current.classList.remove('page-4')
      refSliderPagination.current.classList.remove('page-4')
      refSliderContainer.current.classList.add('page-3')
      refSliderPagination.current.classList.add('page-3')
    } else if (refSliderContainer.current.classList.contains('page-5')) {
      refSliderContainer.current.classList.remove('page-5')
      refSliderPagination.current.classList.remove('page-5')
      refSliderContainer.current.classList.add('page-4')
      refSliderPagination.current.classList.add('page-4')
    }
  }

  const sliderHandleRight = () => {
    if (refSliderContainer.current.classList.contains('page-1')) {
      refSliderContainer.current.classList.remove('page-1')
      refSliderPagination.current.classList.remove('page-1')
      refSliderContainer.current.classList.add('page-2')
      refSliderPagination.current.classList.add('page-2')
    } else if (refSliderContainer.current.classList.contains('page-2')) {
      refSliderContainer.current.classList.remove('page-2')
      refSliderPagination.current.classList.remove('page-2')
      refSliderContainer.current.classList.add('page-3')
      refSliderPagination.current.classList.add('page-3')
    } else if (refSliderContainer.current.classList.contains('page-3')) {
      refSliderContainer.current.classList.remove('page-3')
      refSliderPagination.current.classList.remove('page-3')
      refSliderContainer.current.classList.add('page-4')
      refSliderPagination.current.classList.add('page-4')
    } else if (refSliderContainer.current.classList.contains('page-4')) {
      refSliderContainer.current.classList.remove('page-4')
      refSliderPagination.current.classList.remove('page-4')
      refSliderContainer.current.classList.add('page-5')
      refSliderPagination.current.classList.add('page-5')
    } else if (refSliderContainer.current.classList.contains('page-5')) {
      refSliderContainer.current.classList.remove('page-5')
      refSliderPagination.current.classList.remove('page-5')
      refSliderContainer.current.classList.add('page-1')
      refSliderPagination.current.classList.add('page-1')
    }
  } 

  const handleSlide1 = (props) => {
    console.log("got to 1 and come from " + props);
    refSliderContainer.current.classList.remove('page-2', 'page-3', 'page-4', 'page-5')
    refSliderPagination.current.classList.remove('page-2', "page-3", 'page-4', 'page-5')
    refSliderContainer.current.classList.add('page-1')
    refSliderPagination.current.classList.add('page-1')
  }

  const handleSlide2 = (props) => {
    console.log("got to 2 and come from : " + props);
    refSliderContainer.current.classList.remove('page-1', 'page-3', 'page-4', 'page-5')
    refSliderPagination.current.classList.remove('page-1', 'page-3', 'page-4', 'page-5')
    refSliderContainer.current.classList.add('page-2')
    refSliderPagination.current.classList.add('page-2')
  }

  const handleSlide3 = (props) => {
    console.log("got to 3 and come from : " + props);
    refSliderContainer.current.classList.remove('page-1', 'page-2', 'page-4', 'page-5')
    refSliderPagination.current.classList.remove('page-1', 'page-2', 'page-4', 'page-5')
    refSliderContainer.current.classList.add('page-3')
    refSliderPagination.current.classList.add('page-3')
  }

  const handleSlide4 = (props) => {
    console.log("got to 4 and come from : " + props);
    refSliderContainer.current.classList.remove('page-1', 'page-2', 'page-3', 'page-5')
    refSliderPagination.current.classList.remove('page-1', 'page-2', 'page-3', 'page-5')
    refSliderContainer.current.classList.add('page-4')
    refSliderPagination.current.classList.add('page-4')
  }

  const handleSlide5 = (props) => {
    console.log("got to 5 and come from : " + props);
    refSliderContainer.current.classList.remove('page-1', 'page-2', 'page-3', 'page-4')
    refSliderPagination.current.classList.remove('page-1', 'page-2', 'page-3', 'page-4')
    refSliderContainer.current.classList.add('page-5')
    refSliderPagination.current.classList.add('page-5')
}

  useEffect(() => {
    refSliderContainer.current.classList.add('page-1')
    refSliderPagination.current.classList.add('page-1')
  })

  return (
    <div className="slider-section">
      <div className="slider-container" ref={refSliderContainer}>

        <div className="slider-controls">
          <div className="left" onClick={() => sliderHandleLeft()} ref={refChevronLeft}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="right" onClick={() => sliderHandleRight()} ref={refChevronRight}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>

        <div className="slider-items-container1 sic">

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 1, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir11</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 1, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username 12</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 1, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username 13</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 1, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir11</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
        <div className="slider-items-container2 sic">

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 2, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir21</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 2, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username22</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 2, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username23</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 2, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username22</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
        <div className="slider-items-container3 sic">

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 3, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir31</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 3, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username32</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 3, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username33</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 3, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username33</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
        <div className="slider-items-container4 sic">

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 4, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir41</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 4, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username42</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 4, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username43</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 4, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username43</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
        <div className="slider-items-container5 sic">

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 5, vidéo 1 pa t e lorem ipsum</p>
                </div>
                <div className="username">
                  <p>Usernamezir51</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 5, vidéo 2</p>
                </div>
                <div className="username">
                  <p>Username52</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 5, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username53</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/watch/' className="slider-item">
            <div className="bg-item"></div>
            <div className="hover-container">
              <div className="left-vi">
                <div className="user-picture">
                  <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
                </div>
              </div>
              <div className="video-infos">
                <div className="item-name">
                  <p>Titre de la page 4, vidéo 3</p>
                </div>
                <div className="username">
                  <p>Username43</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      <div className="slider-pagination">
        <div className="slider-pag-overlay" ref={refSliderPagination}>
          <div className="slider-pag-1 slider-pag-item" onClick={() => handleSlide1(refSliderPagination.current.classList[1])}>
            <div className="active"></div>
          </div>
          <div className="slider-pag-2 slider-pag-item" onClick={() => handleSlide2(refSliderPagination.current.classList[1])}>
            <div className="active"></div>
          </div>
          <div className="slider-pag-3 slider-pag-item" onClick={() => handleSlide3(refSliderPagination.current.classList[1])}>
            <div className="active"></div>
          </div>
          <div className="slider-pag-4 slider-pag-item" onClick={() => handleSlide4(refSliderPagination.current.classList[1])}>
            <div className="active"></div>
          </div>
          <div className="slider-pag-5 slider-pag-item" onClick={() => handleSlide5(refSliderPagination.current.classList[1])}>
            <div className="active"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SliderComponent
