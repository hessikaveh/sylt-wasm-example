use async_std::task::block_on;
use wasm_bindgen::prelude::*;

mod app;
use app::run_app;
mod sketch;

#[wasm_bindgen]
pub async fn main_web() {
    block_on(async {
        run_app().await;
    });
}
