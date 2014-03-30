HEAD = templates/head.html
TAIL = templates/tail.html

resume:
	@cat resume/resume.md | redcarpet > resume/resume.html --smarty
	@cat $(HEAD) resume/resume.html $(TAIL) > resume/index.html
	@rm -f resume/resume.html


.PHONY: resume

