import { create } from "zustand";

// Define Order type
interface Order {
  orderId: string;
  customerName: string;
  amount: number;
  status: string;
}

// Define OrdersState type
interface OrdersState {
  orders: {
    daraz: Order[];
    foodpanda: Order[];
    amazon: Order[];
  };
  domain:string,
  setOrders: (newOrders: OrdersState["orders"]) => void;
  filterOrders: (platform: keyof OrdersState["orders"], status: string) => void;
  resetOrders: (originalOrders: OrdersState["orders"]) => void;
}

// Zustand store with TypeScript
const useOrderStore = create<OrdersState>((set) => ({
  orders: { daraz: [], foodpanda: [], amazon: [] },
  domain:"",
  setSelectedDomain:(domain:string)=>set({domain:domain}),
  setOrders: (newOrders) => set({ orders: newOrders }),
  filterOrders: (platform, status) =>
    set((state) => ({
      orders: {
        ...state.orders,
        [platform]: state.orders[platform].filter((order) => order.status === status),
      },
    })),
  resetOrders: (originalOrders) => set({ orders: originalOrders }),
}));

export default useOrderStore;
