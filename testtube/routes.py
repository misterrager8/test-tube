from flask import current_app, send_from_directory, request


@current_app.route("/")
def index():
    return send_from_directory(current_app.static_folder, "index.html")
