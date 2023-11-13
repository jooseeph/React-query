import { Button } from "antd";
import { Routes } from "../../router/routes";
import { useNavigate } from "react-router-dom";

const CreateFormButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(Routes.form);
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Create Form
    </Button>
  );
};

export default CreateFormButton;
