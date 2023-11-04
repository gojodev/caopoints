@echo off

FOR /F "delims=" %%i in ( '""C:\Users\eakol\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"" components copy-bundled-python'
) DO (
SET CLOUDSDK_PYTHON=%%i
)

npm update && npm i firebase-tools && npm audit fix --force && echo Y | gcloud components update