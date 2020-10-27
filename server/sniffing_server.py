# from http.server import HTTPServer, BaseHTTPRequestHandler, SimpleHTTPRequestHandler
# import socketserver
# from io import BytesIO
import json
import os
import re
import datetime
import csv


# class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

#     def do_OPTIONS(self):
#         self.send_header('Access-Control-Allow-Origin', '*')
#         self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
#         self.send_header("Access-Control-Allow-Headers", "X-Requested-With")

#     def do_POST(self):
#         content_length = int(self.headers['Content-Length'])
#         body = self.rfile.read(content_length).decode("utf-8").split('::', 2)

#         with open('results.csv', 'a') as results_file:
#             csv_writer = csv.writer(results_file, delimiter=',')
#             csv_writer.writerow(body)

# PORT = 8001
# web_dir = os.path.join(os.path.dirname(__file__), './')
# os.chdir(web_dir)

# Handler = SimpleHTTPRequestHandler
# httpd = socketserver.TCPServer(("0.0.0.0", PORT), Handler)
# print("serving at port", PORT)
# httpd.serve_forever()
from http.server import HTTPServer, BaseHTTPRequestHandler
import ssl
from io import BytesIO


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With")

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hello, world!')

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length).decode("utf-8").split('::', 2)

        with open('results.csv', 'a') as results_file:
            csv_writer = csv.writer(results_file, delimiter=',')
            csv_writer.writerow(body)
    



httpd = HTTPServer(('0.0.0.0', 8001), SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket,
        keyfile="key.pem",
        certfile='cert.pem', server_side=True)
httpd.serve_forever()