import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
        }}
      />
        <Tabs.Screen
          name="Sobre"
          options={{
            title: "Sobre",
          }}
        />
        <Tabs.Screen
          name="Cadastro"
          options={{
            title: "Cadastro",
          }}
        />
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
        }}
      />
    </Tabs>
  );
}
