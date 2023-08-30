import React from "react";
import styles from "./WomenCategoryCarousel.module.css";
import Item from "../Item";
import womenShirt1 from "../../assets/women-shirt-1.webp";
import womenShirt2 from "../../assets/women-shirt-2.webp";
import womenShirt3 from "../../assets/women-shirt-3.webp";

function WomenCategoryCarousel() {
  const items = [
    [
      { img: womenShirt1, description: "Purple Cardigan", price: "$32.00" },
      { img: womenShirt2, description: "Knitted Sweater", price: "$28.00" },
      { img: womenShirt3, description: "Pineapple Sweater", price: "$45.00" },
    ],
    [
      { img: womenShirt1, description: "Purple Cardigan", price: "$32.00" },
      { img: womenShirt2, description: "Knitted Sweater", price: "$28.00" },
      { img: womenShirt3, description: "Pineapple Sweater", price: "$45.00" },
    ],
    [
      { img: womenShirt1, description: "Purple Cardigan", price: "$32.00" },
      { img: womenShirt2, description: "Knitted Sweater", price: "$28.00" },
      { img: womenShirt3, description: "Pineapple Sweater", price: "$45.00" },
    ],
  ];
  return (
    <>
      <div className="container-fluid pt-4">
        <div className="row ">
          <div className="col-6">
            <h3 className={`mb-3 ${styles.carouselLabel}`}>Featured Items</h3>
          </div>
          <div className="col-6 text-end">
            <a
              className="btn btn-outline-dark mb-3 me-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-bs-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="btn btn-outline-dark mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-bs-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-inner">
                {/* use .map() to create each carousel slide */}
                {items.map((item, index) => {
                  return (
                    <>
                      {index === 0 && (
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[0]} />
                              </div>
                            </div>
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[1]} />
                              </div>
                            </div>
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[2]} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {index !== 0 && (
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[0]} />
                              </div>
                            </div>
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[1]} />
                              </div>
                            </div>
                            <div className="col-4 mb-3">
                              <div>
                                <Item item={item[2]} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WomenCategoryCarousel;
