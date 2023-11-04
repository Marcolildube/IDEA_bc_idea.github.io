const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const employeeModal = document.getElementById("employeeModal");

openModalButton.addEventListener("click", () => {
    employeeModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    employeeModal.style.display = "none";
});
