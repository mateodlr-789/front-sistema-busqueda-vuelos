import { Dropdown, IDropdownItem } from "@/components";

export default function Avatar() {
  const options: IDropdownItem[] = [
    {
      name: "otra",
      icon: "ear-phones-alt",
      onClick: () => console.log("salir"),
    },
    {
      name: "Salir",
      icon: "ear-phones-alt",
      onClick: () => console.log("salir"),
    },
  ]
  return (
    <Dropdown options={options}>
      <img
        className="inline-block size-8 rounded-full"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      ></img>
    </Dropdown>
  );
}
