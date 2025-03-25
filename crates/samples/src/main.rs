use async_std::task::block_on;


mod app;
use app::run_app;
mod sketch;

fn main() {
    block_on(async {
        run_app().await;
    });
}

