import React, { useState, useCallback, useRef, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

function App() {
  const [collegeList, setCollegeList] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/colleges.json",
    })
      .then((resp) => {
        const temp = [...resp.data.colleges.slice((page - 1) * 10, page * 10)];
        if (temp.length === 0) setHasMore(false);
        else setCollegeList((prev) => [...prev, ...temp]);
      })
      .catch((e) => {
        setError(true);
      });
  }, [page]);

  const ref = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      //  if(loading) return
      if (ref.current) ref.current.disconnect();
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) ref.current.observe(node);
    },
    [hasMore]
  );

  return (
    <>
     <div className = 'MainClass'>
     {collegeList.map((College, id) => {
        if (collegeList.length === id + 1) {
          return (
            <div ref={lastBookElementRef} className = {'Card'} key={id}>
              <Header
                promoted={College.promoted}
                id={id}
                ranking={College.ranking}
                tags={College.tags}
                rating={College.rating}
                remark = {College.rating_remarks}
              ></Header>
              <Footer
                name={College.college_name}
                discount={College.discount}
                originalFee={College.original_fees}
                discountedFee={College.discounted_fees}
                feeCycle={College.fees_cycle}
                amenties={College.amenties}
                rating={College.rating}
                fnp = {College.famous_nearest_places}
                nearestPlace = {College.nearest_place}
              ></Footer>
            </div>
          );
        } else {
          return (
            <div key={id} className = {'Card'}>
              <Header
                promoted={College.promoted}
                id={id}
                ranking={College.ranking}
                tags={College.tags}
                rating={College.rating}
                remark = {College.rating_remarks}
              ></Header>
              <Footer
                name={College.college_name}
                discount={College.discount}
                originalFee={College.original_fees}
                discountedFee={College.discounted_fees}
                feeCycle={College.fees_cycle}
                amenties={College.amenties}
                rating={College.rating}
                fnp = {College.famous_nearest_places}
                nearestPlace = {College.nearest_place}
                offer = {College.offertext}
              ></Footer>
            </div>
          );
        }
      })}
     </div>
     
      <div>{error && "...Error"}</div>
    </>
  );
}

export default App;
