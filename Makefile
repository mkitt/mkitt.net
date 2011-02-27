
PDF_FLAGS = --fontsize 9.0 \
						--linkstyle plain \
						--linkcolor blue \
						--embedfonts \
						--footer "c 1" \
						--continuous \
						--no-toc

SITE_HEAD = src/html/head.html
SITE_TAIL = src/html/tail.html
SITE_MKDN = src/markdown/index.md
SITE_HTML = $(SITE_MKDN:.md=.html)


INFO_MKDN = src/markdown/qualifications.md \
						src/markdown/objective.md \
						src/markdown/expertise.md \
						src/markdown/clients.md \
						src/markdown/projects.md \
						src/markdown/experience.md \
						src/markdown/education.md \
						src/markdown/recognition.md
INFO_HTML = $(INFO_MKDN:.md=.html)


BIOS_MKDN = src/markdown/qualifications.md \
						src/markdown/clients.md \
						src/markdown/experience.md \
						src/markdown/education.md \
						src/markdown/recognition.md
BIOS_HTML = $(BIOS_MKDN:.md=.html)


all: index.html resume/index.html resume/resume.pdf bio/index.html bio/bio.pdf clean

index.html: $(SITE_HEAD) $(SITE_TAIL) $(SITE_HTML)
	cat $(SITE_HEAD) $(SITE_HTML) $(SITE_TAIL) > index.html

resume/index.html: $(SITE_HEAD) $(SITE_TAIL) $(INFO_HTML)
	cat $(SITE_HEAD) $(INFO_HTML) $(SITE_TAIL) > resume/index.html

resume/resume.pdf: $(INFO_HTML)
	rm -f $@
	cat $(INFO_HTML) > resume/resume.html
	htmldoc resume/resume.html $(PDF_FLAGS) --outfile $@
	rm -f resume/resume.html

bio/index.html: $(SITE_HEAD) $(SITE_TAIL) $(BIOS_HTML)
	cat $(SITE_HEAD) $(BIOS_HTML) $(SITE_TAIL) > bio/index.html

bio/bio.pdf: $(BIOS_HTML)
	rm -f $@
	cat $(BIOS_HTML) > bio/bio.html
	htmldoc bio/bio.html $(PDF_FLAGS) --outfile $@
	rm -f bio/bio.html

%.html: %.md
	markdown -o $@ $<

clean:
	rm -f src/markdown/*.html

view:
	open resume/resume.pdf
	open bio/bio.pdf

debug:
	@echo $(SITE_HEAD)

.PHONY: clean view debug

