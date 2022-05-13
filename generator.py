from glob import glob
from markdown2 import markdown
import os


class StaticSiteGenerator():
	"""
	"""

	def __init__(self, input_dir, output_dir):
		self.input_dir  = input_dir
		self.output_dir = output_dir

	def generate(self):
		""" Converts markdown files in the output directory to HTML files in 
		the output directory.
		"""
		header_html = self._header_string()
		footer_html = self._footer_string()

		self.clean_output_dir()

		path = os.path.join(self.input_dir, "*.md")
		files = glob(path)
		for file in files:

			_, filename = os.path.split(file)
			fname, _ = os.path.splitext(filename)

			with open(file) as f:
				md      = f.read()
				body    = markdown(md)			
				content = header_html + body + footer_html

				with open(os.path.join(self.output_dir, fname+".html"), "w") as f:
					f.write(content)

				print("Converted file: {}".format(fname))

	def clean_output_dir(self):
		""" Removes all HTML files from the output directory.
		"""
		path = os.path.join(self.output_dir, "*.html")
		files = glob(path)
		for file in files:
			os.remove(file)

	def _header_string(self):
		""" Returns header file as a string.
		"""
		path = os.path.join(self.input_dir, "header.html")
		with open(path) as f:
			return f.read()

	def _footer_string(self):
		""" Returns footer file as a string.
		"""
		path = os.path.join(self.input_dir, "footer.html")
		with open(path) as f:
			return f.read()


if __name__ == "__main__":
	generator = StaticSiteGenerator("./source", "./docs")
	generator.generate()
