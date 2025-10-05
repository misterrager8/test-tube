import setuptools

setuptools.setup(
    name="testtube",
    version="2025",
    long_description=open("README.md").read(),
    license=open("LICENSE.md").read(),
    py_modules=["testtube"],
    entry_points={"console_scripts": ["testtube=testtube.__main__:cli"]},
)
