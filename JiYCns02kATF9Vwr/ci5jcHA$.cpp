for (int i = 2; i <= n; i++)
{
    for (int j = 1; j < (1 << n); j++)
    {
        if (cnt[j] != i - 1)
            continue;
        for (int k = 1; k <= n; k++)
        {
            if (j & (1 << k - 1))
                continue;
            if (b[k] != -1 && b[k] != i - 1)
                continue;
            for (int l = 1; l <= n; l++)
            {
                if (!(j & (1 << l - 1)))
                    continue;
                dp[j | (1 << k - 1)][k] = max(dp[j | (1 << k - 1)][k], dp[j][l] + a[l] * a[k]);
            }
        }
    }
}
