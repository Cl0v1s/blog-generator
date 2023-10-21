# Blog Generator for bdx.town

BDX.town now uses Plume to allow its users to manage their own blogs. Unfortunately, we have been experiencing numerous issues with Plume lately, and due to our commitment to being eco-responsible, I'd like to transition to a static file-based solution.

## Not Just Another Static Blog Generator

This project does not aim to create yet another static blog generator; instead, it will utilize 11ty for that purpose. Our goal here is to develop a static file-based CMS, enabling our users to manage their blogs independently without relying on any server except Nginx (which is necessary in any case).

While some users may be able to manage their blogs using FTP or similar solutions, not all of our users are necessarily tech-savvy. Therefore, a solution with an improved and simplified user experience (UX) is essential. To achieve this, we intend to leverage static HTML files to create a multi-page application with progressive enhancement (yes, we plan to make it functional without JavaScript).

## Technical Stack

* A Vite project customized to generate multiple HTML files, providing a lightweight CMS app.
* An NGINX server with Webdav enabled (which will also handle authentication at some point) to manage source content files.
* Some scripts to trigger 11ty when files are created, edited, or deleted.
* 11ty