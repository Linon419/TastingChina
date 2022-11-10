import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import './index.scss'
const Menu = () => {
  return (<div>

    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">BAQUET MENU</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Baquet Menu</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>


    <div className="container-xxl py-5" id="menu">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Banquet Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
          <h6 style={{ paddingBottom: '4%' }}>Private room available, can accommodate 8-10 people, offset 600 (including drinks) booked three days in advance</h6>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
            <HashLink  to="menu#tab1" className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill">
            <i className="fa fa-dollar-sign fa-2x text-primary" />
                <div className="ps-3">
                  {/* <small class="text-body">Popular</small> */}
                  <h6 className="mt-n1 mb-0">45 per person </h6>
                </div>
            </HashLink >

            </li>
            <li className="nav-item">
            <HashLink to="menu#tab2" className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill">
            <i className="fa fa-dollar-sign fa-2x text-primary" />
                <div className="ps-3">
                  {/* <small class="text-body">Special</small> */}
                  <h6 className="mt-n1 mb-0">60 per person </h6>
                </div>
            </HashLink >

            </li>
            <li className="nav-item">
            <HashLink  to="menu#tab3" className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill">
            <i className="fa fa-dollar-sign fa-2x text-primary" />
                <div className="ps-3">
                  {/* <small class="text-body">Lovely</small> */}
                  <h6 className="mt-n1 mb-0">75 per person </h6>
                </div>
            </HashLink >

            </li>
          </ul>
          <div className="tab-content">
            <div id="tab1" className="tab-pane fade show p-0 active">
              <div className="notepad">
                <div className="top" />
                <div className="paper">
                  <h2>Entrée</h2>
                  Spring Roll<br />
                  Juicy Pork dumpling<br />
                  Crystal Prawn Dumpling<br />
                  Mixed Pan-fired Dumpling<br />
                  Salt &amp; pepper Squid (Entrée size)
                  <h2>Main</h2>
                  1 Squid Dish Choosing from<br />
                  <em>&nbsp; Salt &amp; pepper squid<br />
                    &nbsp; Stir-fried squid with Teriyaki sauce<br /></em>
                  1 Pork Dish Choosing from<br />
                  <em>&nbsp; Sweet &amp; sour pork w pineapple Szechuan style fish flavoured shredded pork
                    w Chinese Pancake<br />
                    &nbsp; Shredded pork (shallots soy sauce) w Chinese pancake<br /></em>
                  1 Chicken Dishes Choosing from<br />
                  <em>&nbsp; Fried crispy chicken w Szechuan pepper, chilli &amp; peanuts<br />
                    &nbsp; Honey Soy Chicken<br />
                    &nbsp; Sweet and Sour crispy chicken<br />
                    &nbsp; Satay Chicken<br />
                    &nbsp; Gong pao Chicken w peanuts<br />
                    &nbsp; Teriyaki Chicken<br /></em>
                  1 Beef Dish Choosing from<br />
                  <em>&nbsp; Satay beef<br />
                    &nbsp; Teriyaki beef<br />
                    &nbsp; Mongolian beef<br />
                    &nbsp; Chilli &amp; coriander beef<br />
                  </em><br />
                  Chef selection of mixed vegetables<br />
                  Vegetarian Egg Fried rice
                </div>
              </div>
            </div>
            <div id="tab2" className="tab-pane fade show p-0">
              <div className="notepad">
                <div className="top" />
                <div className="paper" >
                  <h2>Entrée</h2>
                  Spring Roll<br />
                  Juicy Pork dumpling<br />
                  Crystal Prawn Dumpling<br />
                  Mixed Pan-fired Dumpling<br />
                  Salt &amp; pepper Squid (Entrée size)<br />
                  <h2>Main</h2>
                  1 Prawn cutlet Dish Choosing from<br />
                  <em>&nbsp; Sweet &amp; sour prawn cutlet<br />
                    &nbsp; SGong pao prawn cutlet w peanuts<br />
                    &nbsp; Salt &amp; pepper prawn cutlet<br />
                    &nbsp; Prawn cutlet w ginger and shallots<br />
                  </em>
                  1 Pork Dish Choosing from<br />
                  <em>&nbsp; Soy sauce braised Pork belly<br />
                    &nbsp; Sweet &amp; sour pork w pineapple<br />
                    &nbsp; Shredded pork (shallots soy sauce) w Chinese pancake
                    &nbsp; Twice cooked pork belly w spicy sauce &amp; serve w Chinese pancake
                  </em>
                  1 Chicken Dishes Choosing from<br />
                  <em>&nbsp; Fried crispy chicken w Szechuan pepper, chilli &amp; peanuts<br />
                    &nbsp; Honey Soy Chicken<br />
                    &nbsp; Sweet and Sour crispy chicken<br />
                    &nbsp; Satay Chicken<br />
                    &nbsp; Gong pao Chicken w peanuts<br />
                    &nbsp; Teriyaki Chicken<br /></em>
                  1 Beef Dish Choosing from<br />
                  <em>&nbsp; Satay beef<br />
                    &nbsp; Teriyaki beef<br />
                    &nbsp; Mongolian beef<br />
                    &nbsp; Chilli &amp; coriander beef</em><br />
                  1 Lamb Dish Choosing from<br />
                  <em>&nbsp; Stir-fried lamb w cumin &amp; chilli<br />
                    &nbsp; Stir-fried lamb w Mongolia sauce<br />
                    &nbsp; Stir-fried lamb w shallots&amp; onion<br />
                    &nbsp; Stir-fried lamb w chilli &amp; coriander<br />
                  </em><br />
                  Chef selection of mixed vegetables<br />
                  Chicken Fried rice
                </div>
              </div>
            </div>
            <div id="tab3" className="tab-pane fade show p-0">
              <div className="notepad">
                <div className="top" />
                <div className="paper">
                  <h2>Entrée</h2>
                  Spring Roll<br />
                  Juicy Pork dumpling<br />
                  Crystal Prawn Dumpling<br />
                  Mixed Pan-fired Dumpling<br />
                  Cucumber Salad w gallic dressing<br />
                  Fungus salad w vinegar dressing
                  <h2>Main</h2>
                  1 Squid Dish Choosing from<br />
                  <em>&nbsp; Salt &amp; pepper squid<br />
                    &nbsp; Stir-fried squid with Teriyaki sauce<br /></em>
                  1 Prawn cutlet Dish Choosing from<br />
                  <em>&nbsp; Sweet &amp; sour prawn cutlet<br />
                    &nbsp; Gong pao prawn cutlet w pean<br />
                    &nbsp; Salt &amp; pepper prawn cutlet<br />
                    &nbsp; Prawn cutlet w ginger and shallots<br />
                  </em>
                  1 Pork Dish Choosing from<br />
                  <em>
                    &nbsp; Soy sauce braised Pork belly<br />
                    &nbsp; Sweet &amp; sour pork w pineapple<br />
                    &nbsp; Stir-fried shredded pork shallots w soy sauce &amp; serve w Chinese
                    pancake<br />
                    &nbsp; Twice cooked pork belly w spicy sauce &amp; serve w Chinese pancake<br />
                  </em>
                  1 Chicken Dishes Choosing from<br />
                  <em>&nbsp; Fried crispy chicken w Szechuan pepper, chilli &amp; peanuts<br />
                    &nbsp; Honey Soy Chicken<br />
                    &nbsp; Sweet and Sour crispy chicken<br />
                    &nbsp; Satay Chicken<br />
                    &nbsp; Gong pao Chicken w peanuts<br />
                    &nbsp; Teriyaki Chicken<br /></em>
                  1 Angus Beef Dish Choosing from<br />
                  <em>&nbsp; Angus beef w black pepper sauce<br />
                    &nbsp; Angus beef w Chinese BBQ sauce<br /></em><br />
                  1 Lamb Dish Choosing from<br />
                  <em>&nbsp; Lamb ribs w cumin &amp; chilli<br />
                    &nbsp; Stir-fried lamb w Mongolia sauce<br />
                    &nbsp; Stir-fried lamb w shallots&amp; onion<br />
                    &nbsp; Stir-fried lamb w chilli &amp; coriander<br /></em>
                  1 Fish Dish Choosing from<br />
                  <em>&nbsp; 1 Sweet &amp; sour Australian whole barramundi w pine nuts (Per table)<br />
                    &nbsp; 1 Fried Australian whole baby barramundi w spicy sauce (Per table)<br />
                    &nbsp; 1 Fried Australian whole baby barramundi w sweet sauce (Per table)<br />
                    &nbsp; 1 Steamed Australian whole barramundi w Thai Sauce (Per table)<br />
                    &nbsp; 1 Steamed Australian whole barramundi w pickled chilli (Per table)<br />
                    &nbsp; 1 Steamed Australian whole baby barramundi w soy sauce (Per table)<br />
                  </em><br />
                  Chef selection of mixed vegetables<br />
                  Combination Fried rice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export default Menu