#!/bin/sh

# 상위 디렉토리로 이동
cd ../

# output 디렉토리 생성 (이미 존재하면 삭제 후 재생성)
echo "Output 디렉토리 준비 중..."
if [ -d "output" ]; then
    rm -rf output
fi
mkdir output

# 현재 프로젝트를 output으로 복사
echo "프로젝트 파일 복사 중..."
cp -R ./PayPick/* ./output/

# output을 다시 프로젝트 디렉토리로 복사
echo "빌드 결과물 복사 중..."
cp -R ./output ./PayPick/