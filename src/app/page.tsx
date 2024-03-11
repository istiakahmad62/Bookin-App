"use client";
import { RadioChangeEvent } from "antd";
import { Seacrh } from "@/components/search";
import { PhxLayout } from "@/components/common/phxLayout";
import { useMode } from "@/hooks/useMode";
import { SearchResults } from "@/components/search-results";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const queryClient = new QueryClient();

function Home() {
  const [mode, setMode] = useMode();

  const onModeChange = (event: RadioChangeEvent) => {
    const { value } = event.target;
    setMode(value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className={"container"}>
          <PhxLayout>
            <Seacrh mode={mode} onModeChange={onModeChange} />
          </PhxLayout>
          {/* <SearchResults mode={mode} /> */}
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default Home;
