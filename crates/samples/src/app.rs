use nannou::{prelude::*, wgpu::Backends};

use crate::sketch::{create_model, update};

pub async fn run_app() {
    app::Builder::new_async(|app| Box::new(create_model(app)))
        .backends(Backends::PRIMARY | Backends::GL)
        .update(update)
        .run_async()
        .await;
}
