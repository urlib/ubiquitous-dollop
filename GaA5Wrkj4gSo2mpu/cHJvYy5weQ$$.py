feature = 'https://i.typlog.com/zhaliezhi/'
target = ['jpg', 'png']
l = []

if __name__ == "__main__":
    while True:
        s = input()
        if s == "EOF!":
            break
        if s.find(feature) != -1:
            begin = s.find(feature)
            end = -1
            for t in target:
                end = s.find(t)
                if end != -1:
                    end += len(t)
                    break
            tar = s[begin:end]
            if not tar in l:
                print(tar)
                l.append(tar)
