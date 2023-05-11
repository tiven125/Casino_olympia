// Formulario Finalistas
const openModal = document.getElementById(`openRegistroModal`);
const modal = document.getElementById(`modal`);
const cerrarModal = document.getElementById(`cerrarRegistrer`);
const registreForm = document.getElementById(`regitro-form`);

const showRegistrerModal = () => {
  modal.classList.toggle(`is-active`);
};

openModal.addEventListener(`click`, showRegistrerModal);
cerrarModal.addEventListener(`click`, showRegistrerModal);

registreForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const nombre = registreForm[`nombre`];
  const cedula = registreForm[`cedula`];
  const telefono = registreForm[`telefono`];

  guardarFinalista(nombre.value, cedula.value, telefono.value);
  registreForm.reset();
});
