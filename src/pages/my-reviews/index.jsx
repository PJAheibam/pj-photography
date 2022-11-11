import React, { useEffect, useState } from "react";
import { Main } from "../../components/containers";
import { useAuthContext } from "../../context/auth-contex";
import HyperModal from "react-hyper-modal";
import {
  Buttons,
  Content,
  Desc,
  HeaderImage,
  Item,
  ItemHeader,
  NoDataText,
  Section,
  Title,
} from "./styles";
import SecondaryBtn from "../../components/buttons/secondary-button";
import Rating from "../../components/rating";
import { Link } from "react-router-dom";
import Loading from "../loading";
import PrimaryBtn from "../../components/buttons/primary-button";
import useTitleChanger from "../../hooks/use-title";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";

function MyReviews() {
  const [myReviews, setMyReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuthContext();
  const [openModal, setOpenModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete(service_id) {
    const res = window.confirm("Are you sure you want to delete");
    // setDeleting(true);

    if (res) {
      // front end
      // console.log(service_id);
      const rest = myReviews.filter((r) => r.service_id !== service_id);
      setMyReviews(rest);

      // back-end
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/services/${service_id}?method=remove`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const data = await response.json();
        setDeleting(false);
        console.log(data);
        toast.success("Delete Successfull");
      } catch (err) {
        console.error(err);
      }
    }
  }

  // side effects
  useTitleChanger("My Reviews");

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/services`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (typeof data === "object") {
  //         const r = data?.map((item) => {
  //           const found = item?.reviews?.find((rv) => rv?.uid === user?.uid);
  //           if (found !== undefined) {
  //             return {
  //               ...found,
  //               image_url: item?.image_url,
  //               service_name: item?.name,
  //               service_id: item?._id,
  //             };
  //           }
  //           return found;
  //         });
  //         setMyReviews(r.filter((item) => item !== undefined));
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/reviews?uid=${user?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) logout();
        return res.json();
      })
      .then((data) => {
        // console.log("data", data);
        setMyReviews(data.reviews);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (JSON.stringify(myReviews) === "[]" || myReviews === undefined)
    return (
      <Main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NoDataText>You haven't give a review yet</NoDataText>
      </Main>
    );

  if (myReviews)
    return (
      <>
        <Main>
          <Section>
            {myReviews.map((review, i) => (
              <Item key={i}>
                <ItemHeader>
                  <HeaderImage src={review.image_url} alt="thumbnail" />
                </ItemHeader>
                <Title>{review.service_name}</Title>
                <Rating value={review.rating} readOnly />
                <Desc>{review.text}</Desc>
                <Buttons>
                  <SecondaryBtn
                    style={{ width: "fit-content" }}
                    as={Link}
                    to={`/services/${review.service_id}`}
                  >
                    Edit
                  </SecondaryBtn>
                  <SecondaryBtn
                    disabled={deleting ? true : false}
                    onClick={() => handleDelete(review.service_id)}
                    style={{ width: "fit-content" }}
                  >
                    Delete
                  </SecondaryBtn>
                </Buttons>
              </Item>
            ))}
          </Section>
        </Main>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
      </>
    );
}

export default MyReviews;
