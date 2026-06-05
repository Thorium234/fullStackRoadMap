#!/bin/bash
echo "🔍 Large files (>10MB) in Git history:"
git rev-list --objects --all | \
git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize:disk) %(rest)' | \
awk '/^blob/ {size=$3/1024/1024; if (size > 10) printf "%.2f MB %s\n", size, $4}' | \
sort -r -n

echo -e "\n📄 Files to review (PDFs, ZIPs, images):"
find . -type f $ -name "*.pdf" -o -name "*.zip" -o -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name ".*" $ -exec ls -lh {} \; 2>/dev/null | awk '{print $5, $9}' | sort -hr | head -20   
