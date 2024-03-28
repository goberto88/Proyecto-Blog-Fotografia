import React from "react";
import { Form, Button } from "react-bootstrap";
import Style from "/src/Styles/ContactForm.module.css";
import { useForm, } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/Data/config.jsx";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const send = (data) => {
    const contacto = {
      nombre: data.nombre,
      apellido: data.apellido,
      telefono: data.telefono,
      mail: data.mail,
      comentario: data.comentario,
    };
    const contactRef = collection(db, "contacto");
    addDoc(contactRef, contacto);
    reset();
  };

  return (
    <>
      <div className={Style.container}>
        <Form className={Style.Form} onSubmit={handleSubmit(send)}>
          <Form.Group className="mb-2">
            <Form.Label className={Style.label}>Nombre</Form.Label>
            <Form.Control
              className={Style.input}
              placeholder="Escribe tu nombre"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && (
              <p className={Style.error}>Por favor completar el campo nombre</p>
            )}
            <Form.Label className={Style.label}>Apellidos</Form.Label>
            <Form.Control
              className={Style.input}
              type="lastName"
              placeholder="Escribe tu apellido"
              {...register("apellido", { required: true })}
            />
            {errors.apellido && (
              <p className={Style.error}>
                Por favor completar el campo apellido
              </p>
            )}
            <Form.Label className={Style.label}>Teléfono</Form.Label>
            <Form.Control
              className={Style.input}
              placeholder="99 999999999"
              {...register("telefono", {
                required: true,
              })}
            />
            {errors.telefono && (
              <p className={Style.error}>
                Por favor ingrese un número telefónico
              </p>
            )}
            <Form.Label className={Style.label}>Email</Form.Label>
            <Form.Control
              className={Style.input}
              placeholder="nombre@ejemplo.com"
              {...register("mail", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.mail && (
              <p className={Style.error}>Por favor ingrese un email valido</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label className={Style.label}>Deja tu comentario</Form.Label>
            <Form.Control
              className={Style.input}
              as="textarea"
              rows={5}
              {...register("comentario", {required:true})}
            />
            {errors.comentario && (
              <p className={Style.error}>Por favor dejanos un mensaje</p>
            )}
          </Form.Group>
          <div className={Style.containerButton}>
            <Button type="submit" className={Style.button} variant="light">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
