FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine

COPY dir /dir

#ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT false

#RUN apk add --no-cache icu-libs tzdata
#RUN apk add libgdiplus-dev fontconfig ttf-dejavu --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted

#RUN apk add --no-cache icu-libs

#RUN apk update\
# && apk add --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted\
#      icu-libs tzdata libgdiplus-dev fontconfig ttf-dejavu

#ENV LC_ALL en_US.UTF-8
#ENV LANG en_US.UTF-8

#STOPSIGNAL SIGINT

WORKDIR /dir
CMD ["dotnet", "elders.dll"]
