// Creatinrg Composable Funcgtion
import { onMounted, onUnmounted, ref } from "vue";
import { faker } from "@faker-js/faker";
export function useName() {
  // State managed by the composable
  const firstName = ref();
  const lastName = ref();

  // Composable can update it's managed state over time
  function updateName() {
    firstName.value = faker.name.firstName();
    lastName.value = faker.name.lastName();
  }

  onMounted(() => window.addEventListener("mousemove", updateName));
  onUnmounted(() => window.addEventListener("mousemove", updateName));

  // Expose managed state as return value
  return { firstName, lastName };
}
