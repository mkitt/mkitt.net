
HEAD = app/views/head.html
TAIL = app/views/tail.html
MKDN = doc/pages/index.md \
			 doc/pages/elements.md \
			 doc/pages/toolkitt.md
HTML = $(MKDN:.md=.html)

STYL = app/stylesheets/white.styl
CSS = $(STYL:.styl=.css)

TITLE = 'mkitt'
DESC = 'Github Projects by MK'


all: html css

html: $(HTML) clean

css: $(CSS)

clean:
	@rm -f doc/pages/*.html

view:
	open http://local.github-mkitt/

debug:
	@echo $(shell basename $(MKDN))

%.css: %.styl
	@stylus --compress < $< > stylesheets/$(shell basename $@)
	@echo stylesheets/$(shell basename $@) built

%.html: %.md
	@markdown -o $@ $<
	@cat $(HEAD) $@ $(TAIL) > ./$(shell basename $@)
	@sed 's/@TITLE/$(TITLE)/g' $(shell basename $@) > tmp.html
	@mv tmp.html $(shell basename $@)
	@echo $(shell basename $@) built

.PHONY: all html css clean view debug

# TODO: Figure out converting MKDN = doc/pages/*.md into something HTML understands

# TODO: Navigation from markdown or in Makefile?

# TODO: variables for meta description, stylesheet, ribbon link, ribbon color?

# TODO: Generate active class on build based on the page

