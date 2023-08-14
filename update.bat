@echo off

FOR /F "delims=" %%i in ( '""C:\Users\eakol\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"" components copy-bundled-python'
) DO (
SET CLOUDSDK_PYTHON=%%i
)

npm run build && npm i -g firebase-tools && npm update -g && echo Y | gcloud components update