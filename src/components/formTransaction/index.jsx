import "./index.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TotalMoney } from "../totalMoney";
export const FormTransaction = ({ setList, list }) => {
  const schema = yup.object().shape({
    TransasctionDescription: yup
      .string()
      .required("Required field!")
      .min(8, "minimum 8 characters"),
    selectType: yup.string().required("Required field!"),
    amount: yup.number().required("Required field!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    setList([...list, data]);
  };
  return (
    <div className="FormTransaction">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>text descrição</label>
        <input type="text" {...register("TransasctionDescription")} />

        <label>select tipo</label>
        <select {...register("selectType")}>
          <option value="">Escolha</option>
          <option value="dispensa">Dispensa</option>
          <option value="entrada">Entrada</option>
        </select>

        <label>number value</label>
        <input type="number" {...register("amount")}/>

        <input type="submit" />
      </form>
      <TotalMoney list={list} />
    </div>
  );
};

export default FormTransaction;
