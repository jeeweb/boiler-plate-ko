import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option : null = anyone, true = login user only, false = logout user only

  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        //로그인하지않은상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
