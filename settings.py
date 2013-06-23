# Django settings for rcis project.

import os, socket

DEBUG = True
TEMPLATE_DEBUG = DEBUG

#SERVER_EMAIL = 'chlkboard@' + socket.gethostname()

PROJECT_PATH = os.path.abspath(os.path.dirname(__file__))
CURDIR = PROJECT_PATH

join_with_project_path = lambda a, *p: os.path.join(PROJECT_PATH, a, *p)

ADMINS = (
     ('RC internation school developers', 'juacompe@gmail.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'sqlite3', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': join_with_project_path('rcis.db'),                      # Or path to database file if using sqlite3.
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'Asia/Thailand'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale
USE_L10N = True

# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = join_with_project_path('media')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/media/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/admin_media/'

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'tc@q#t+1##d(#(fm&pr0p#gm9b)2xb34fnd1qd18!h5ldd$5!!'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',

    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.media.PlaceholderMediaMiddleware',
    #'utils.middleware.ThreadLocal',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.auth',

    "cms.context_processors.media",
    #'utils.context_processors.settings',
)

ROOT_URLCONF = 'urls'

TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    join_with_project_path('templates'),
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    # Uncomment the next line to enable the admin:
     'django.contrib.admin',

    # ----CMS----
    'cms',
    'cms.plugins.text',
    'cms.plugins.picture',
    'cms.plugins.link',
    'cms.plugins.file',
    'cms.plugins.snippet',
    'cms.plugins.googlemap',
    'cms.plugins.flash',
##    'cms.plugins.cmsplugin_youtube',
    'cmsplugin_youtube',
    'mptt',
    'publisher',
    # ----CMS----
)


########### CMS ##################
gettext = lambda s: s
CMS_TEMPLATES = (
    ('cms/landing.html', gettext('landing page')),
    ('cms/landing_without_promotion.html', gettext('landing page w/o promotion')),
    ('cms/admissions.html', gettext('Admission Page')),
    ('cms/about.html', gettext('About Page')),
    ('cms/our_programmes.html', gettext('Our programmes Page')),
    ('cms/bus_routes.html', gettext('Bus routes Page')),
    ('cms/contact_us.html', gettext('Contact us Page')),
    ('cms/sitemap.html', gettext('Sitemap Page')),
    ('cms/blank.html', gettext('Blank Page')),
    ('cms/school_calendar.html', gettext('School calendar Page')),
    ('cms/school_life.html', gettext('School life Page')),
    ('cms/download.html', gettext('Download Page')),
    ('cms/introducing_rc.html', gettext('Introducing RC Page')),
    ('cms/faq.html', gettext('FAQ Page')),
    ('cms/our_facilities.html', gettext('Our facilities Page')),
    ('cms/daycare.html', gettext('Day care Centre Page')),
    ('cms/nursery.html', gettext('Nursery Page')),
    ('cms/primary.html', gettext('Primary years Page')),
    ('cms/secondary.html', gettext('Secondary years Page')),
    ('cms/other_programmes.html', gettext('Other programmes Page')),
)


LANGUAGES = (
    ('en', gettext('English')),
)

CMS_DEFAULT_LANGUAGE = 'en'
CMS_SOFTROOT = True
CMS_FLAT_URLS = False
CMS_REDIRECTS = True
CMS_SEO_FIELDS = True
CMS_MENU_TITLE_OVERWRITE = True

CMS_UNIQUE_SLUGS = False

CMS_MEDIA_URL = "/media/cms/"

#################################
