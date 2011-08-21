
STYL = app/stylesheets/white.styl

CSS = $(STYL:.styl=.css)

css: $(CSS)

%.css: %.styl
	@stylus --compress < $< > stylesheets/$(shell basename $@)
	@echo stylesheets/$(shell basename $@) built

publish: css


.PHONY: css publish

