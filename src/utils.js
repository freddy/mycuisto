export function saveStatePlugin (store) {
    store.subscribe(
      (mutation, state) => {
        localStorage.setItem(
          'cart',
          JSON.stringify(state.cart)
        )
      }
    )
  }