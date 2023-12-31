import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { signinUser } from "../utils/authAPI";
import { signUserGlobal } from "../global/globalState";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (res: any) => {
    signinUser(res)
      .then((resp) => {
        console.log(resp);
        dispatch(signUserGlobal(resp));
        navigate("/blog");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container>
        <Main>
          <Card onSubmit={onSubmit}>
            <Title>Sign in to Blog Spot</Title>
            <Title>Sign In</Title>

            <InputHolder>
              <Input placeholder="Email" {...register("email")} />
              {errors.email && <Error>email error</Error>}
            </InputHolder>

            <InputHolder>
              <Input placeholder="Password" {...register("password")} />
              {errors.email && <Error>password error</Error>}
            </InputHolder>

            <Button type="submit" bg="p">
              Sign In
            </Button>

            <TextHolder>
              <Line />
              <MyText>or</MyText>
              <Line />
            </TextHolder>

            <Link
              style={{ textDecoration: "none", color: "#220122 " }}
              to="/register"
            >
              <Button>Sign Up</Button>
            </Link>
          </Card>
        </Main>
      </Container>
    </div>
  );
};

export default SignIn;

const MyText = styled.div`
  margin: 0 5px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #837583;
`;

const TextHolder = styled.div`
  display: flex;
  width: 99%;
  align-items: center;
`;

const Button = styled.button<{ bg?: string }>`
  width: 99%;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ bg }) => (bg ? "#590059" : "purple")};

  color: white;
  border-radius: 3px;
  cursor: pointer;
  border: 0;
  outline: none;
  font-family: Poppins;
  font-size: 15px;
  margin-top: 20px;
`;

const Error = styled.div`
  font-size: 12px;
  color: #c9016c;
  text-align: right;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid silver;
  border-radius: 3px;
  height: 30px;
  width: 97%;
  padding-left: 5px;
`;

const InputText = styled.div`
  font-size: 13px;
`;

const InputHolder = styled.div`
  margin: 10px 0;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 500;
  color: #f703ff;
  margin-bottom: 10px;
  font-size: large;

`;

const Card = styled.form`
  width: 350px;
  min-height: fit-content;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 20px 10px;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white

`;
